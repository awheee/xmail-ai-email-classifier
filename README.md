**XMail – AI-Driven Email Categorization Engine**

**🚀 Overview**

XMail is an AI-powered email classification system designed to automatically categorize incoming emails into meaningful classes such as Spam, Promotions, Social, and Important. It combines machine learning with real-time Gmail data to provide a structured and intelligent inbox experience.

⸻

**🧠 Key Features**
	•	Automated email classification using machine learning and NLP techniques
	•	Categorization into multiple classes (Spam, Promotions, Social, Important, etc.)
	•	Real-time email fetching using Gmail API
	•	Secure authentication using OAuth 2.0
	•	Full-stack web application with FastAPI backend and React frontend
	•	Efficient caching mechanism to avoid redundant classification

⸻

**🛠 Tech Stack**

**Backend**
	•	Python
	•	FastAPI / Flask
	•	Scikit-learn
	•	Natural Language Processing (NLP)
	•	Gmail API
	•	OAuth 2.0

**Frontend**
	•	React.js
	•	JavaScript
	•	CSS

**Cloud & Tools**
	•	Google Cloud Platform
	•	REST APIs

⸻

**⚙️ System Architecture**
	1.	Gmail API fetches user emails securely using OAuth 2.0
	2.	Backend extracts and processes email content (subject + snippet)
	3.	NLP pipeline performs text preprocessing and vectorization
	4.	Machine learning model classifies emails into predefined categories
	5.	Results are served via FastAPI and displayed in the React frontend

⸻

**📊 Machine Learning Pipeline**
	•	Text preprocessing and feature extraction
	•	Supervised learning-based classification
	•	Model evaluation using:
	•	Cross-validation
	•	Precision
	•	Recall
	•	F1-score

⸻

**⚙️ Setup Instructions**

1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/xmail-ai-email-classifier.git
cd xmail-ai-email-classifier


⸻

2. Backend Setup

cd project-xmail-backend
pip install -r requirements.txt
uvicorn main:app --reload

Add your own credentials.json file for Gmail API access.

⸻

3. Frontend Setup

cd xmail-frontend
npm install
npm start


⸻

**🔐 Security Considerations**

Sensitive files such as:
	•	credentials.json
	•	token.json

are excluded using .gitignore and must be configured locally. These files are required for Gmail API authentication but should never be uploaded to public repositories.

⸻

**🔮 Future Improvements**
	•	Email summarization using LLMs
	•	Personalized classification models
	•	Priority-based inbox ranking
	•	Cloud deployment and scaling

⸻

**👨‍💻 Author**

Avi Jain

