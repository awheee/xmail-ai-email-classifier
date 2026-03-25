import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import EmailList from "../components/EmailList";
import { getEmails } from "../services/api";
import styles from "../styles/Inbox.module.css";

export default function InboxPage() {
  const [emails, setEmails] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchInitialEmails() {
    try {
      const data = await getEmails();
      setEmails(data.emails);
      setNextPageToken(data.nextPageToken);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  fetchInitialEmails();
}, []);

const loadMoreEmails = async () => {
  if (!nextPageToken) return;

  const data = await getEmails(nextPageToken);
  setEmails((prev) => [...prev, ...data.emails]);
  setNextPageToken(data.nextPageToken);
};

  const filteredEmails = Array.isArray(emails)
  ? activeCategory === "All"
    ? emails
    : emails.filter((e) => e.category === activeCategory)
  : [];

  return (
    <div className={styles.inboxLayout}>
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className={styles.mainContent}>
        <header className={styles.headerBar}>
          <div>
            <h1>Smart Inbox</h1>
<p>
  Showing <strong>{activeCategory}</strong> emails
</p>
          </div>
        </header>

        {loading ? (
  <div style={{ padding: "32px" }}>Loading emails...</div>
) : (
  <>
    <EmailList emails={filteredEmails} />

    {nextPageToken && (
      <div style={{ textAlign: "center", margin: "24px 0" }}>
        <button
          onClick={loadMoreEmails}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "1px solid #d0d7de",
            background: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Load next 50 emails
        </button>
      </div>
    )}
  </>
)}
      </main>
    </div>
  );
}