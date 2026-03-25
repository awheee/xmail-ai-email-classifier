from fastapi import FastAPI, Request, Query
from fastapi.responses import RedirectResponse, HTMLResponse
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from datetime import datetime
import os
import json

CLASSIFIED_EMAILS_FILE = "emails_classified.json"


# ----------------- ML classifier setup -----------------
from transformers import pipeline

# Load classifier once
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

def classify_email(subject, snippet):
    text = (subject or "") + " " + (snippet or "")
    
    # Define the categories
    labels = ["Spam", "Important", "Promotions", "Social", "Updates", "Finance", "Travel", "Personal"]
    
    # Get classification
    result = classifier(text, candidate_labels=labels)
    
    # Return the category with highest score
    return result["labels"][0]

# ----------------- Gmail setup -----------------
SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]
CLIENT_SECRETS_FILE = "credentials.json"
REDIRECT_URI = "http://localhost:8000/oauth2callback"

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

def get_credentials():
    token_file = "token_data/token.json"
    with open(token_file, "r") as f:
        creds_data = json.load(f)
    creds = Credentials.from_authorized_user_info(creds_data, SCOPES)
    return creds

def fetch_emails(max_results=50, page_token=None):
    creds = get_credentials()
    service = build("gmail", "v1", credentials=creds)
    
    # Fetch only emails in INBOX
    results = service.users().messages().list(
    userId="me",
    maxResults=max_results,
    labelIds=["INBOX"],
    pageToken=page_token
    ).execute()
    
    messages = results.get("messages", [])
    email_data = []
    
    for msg in messages:
        msg_detail = service.users().messages().get(userId="me", id=msg["id"]).execute()
        internal_date = int(msg_detail.get("internalDate", 0))
        dt = datetime.fromtimestamp(internal_date / 1000)

        formatted_time = dt.strftime("%d %b, %I:%M %p")
        labels = msg_detail.get("labelIds", [])
        is_read = "UNREAD" not in labels
        snippet = msg_detail.get("snippet")
        subject = None
        sender = None
        headers = msg_detail.get("payload", {}).get("headers", [])
        for h in headers:
            if h["name"] == "Subject":
                subject = h["value"]
            if h["name"] == "From":
                sender = h["value"]
        email_data.append({
    "id": msg["id"],
    "sender": sender,
    "subject": subject,
    "snippet": snippet,
    "isRead": is_read,
    "time": formatted_time
})
    
    return email_data, results.get("nextPageToken")

def load_cached_emails():
    if os.path.exists(CLASSIFIED_EMAILS_FILE):
        with open(CLASSIFIED_EMAILS_FILE, "r") as f:
            return json.load(f)
    return []

def save_cached_emails(emails):
    with open(CLASSIFIED_EMAILS_FILE, "w") as f:
        json.dump(emails, f, indent=2)

# ----------------- FastAPI setup -----------------
app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Project Xmail Backend Running"}

@app.get("/login")
def login():
    flow = Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE,
        scopes=SCOPES,
        redirect_uri=REDIRECT_URI
    )
    auth_url, _ = flow.authorization_url(prompt="consent")
    return RedirectResponse(auth_url)

@app.get("/oauth2callback")
def oauth2callback(code: str = Query(None)):
    if code is None:
        return RedirectResponse(url="http://localhost:3000/")

    flow = Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE,
        scopes=SCOPES,
        redirect_uri=REDIRECT_URI
    )

    flow.fetch_token(code=code)
    credentials = flow.credentials

    token_file = "token_data/token.json"
    os.makedirs(os.path.dirname(token_file), exist_ok=True)
    with open(token_file, "w") as f:
        f.write(credentials.to_json())

    # 🔑 IMPORTANT: Redirect directly to frontend inbox
    response = RedirectResponse(
        url="http://localhost:3000/inbox",
        status_code=302
    )

    # 🔒 Prevent caching of OAuth response (helps back-button behavior)
    response.headers["Cache-Control"] = "no-store"
    response.headers["Pragma"] = "no-cache"

    return response

@app.get("/emails")
def get_emails(max_results: int = 50, page_token: str = None):
    try:
        # 1. Load cached emails
        cached_emails = load_cached_emails()
        cached_ids = {
    email.get("id")
    for email in cached_emails
    if isinstance(email, dict) and "id" in email
}

        # 2. Fetch fresh emails from Gmail
        emails, next_token = fetch_emails(
            max_results=max_results,
            page_token=page_token
        )

        new_emails = []

        for email in emails:
            # 3. If already classified, reuse it
            if email["id"] in cached_ids:
                continue
                cached = next(
    (e for e in cached_emails if isinstance(e, dict) and e.get("id") == email.get("id")),
    None
)
                new_emails.append(cached)
            else:
                # 4. Classify ONLY new emails
                email["category"] = classify_email(
                    email["subject"], email["snippet"]
                )
                new_emails.append(email)
                cached_emails.append(email)

        # 5. Save updated cache
        save_cached_emails(cached_emails)

        return {
            "emails": new_emails,
            "nextPageToken": next_token
        }

    except Exception as e:
        return {"error": str(e)}

