import React from "react";
import EmailItem from "./EmailItem";

const EmailList = ({ emails }) => {
  // 🛡️ Defensive check (VERY IMPORTANT)
  if (!Array.isArray(emails)) {
    return null;
  }

  if (emails.length === 0) {
    return (
      <div style={{ padding: "24px", color: "#666" }}>
        No emails to display
      </div>
    );
  }

  return (
    <div>
      {emails.map((email) => (
        <EmailItem key={email.id} email={email} />
      ))}
    </div>
  );
};

export default EmailList;