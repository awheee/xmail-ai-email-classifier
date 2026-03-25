import React from "react";
import styles from "../styles/Inbox.module.css";

const categoryClassMap = {
  Important: "catImportant",
  Personal: "catPersonal",
  Finance: "catFinance",
  Social: "catSocial",
  Promotions: "catPromotions",
  Updates: "catUpdates",
  Spam: "catSpam",
};

const EmailItem = ({ email }) => {
  const openInGmail = () => {
    const url = `https://mail.google.com/mail/u/0/#inbox/${email.id}`;
    window.open(url, "_blank");
  };

  return (
    <div className={styles.emailCard} onClick={openInGmail}>
      {/* Hover-only overlay */}
      <div className={styles.hoverOverlay}>
        <span>Open in Gmail</span>
      </div>

      {/* Actual email content */}
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
  <div className={styles.subjectRow}>
    <span
  className={`${styles.subject} ${
    email.isRead === false ? styles.unread : ""
  }`}
>
  {email.subject}
</span>
    <span
  className={`${styles.categoryTag} ${
    styles[categoryClassMap[email.category]] || ""
  }`}
>
  {email.category}
</span>
  </div>

  <div className={styles.time}>
    {email.time ? email.time : ""}
  </div>
</div>

        <div className={styles.sender}>{email.sender}</div>

        <div className={styles.snippet}>
          {email.snippet?.replace(/&#39;/g, "'")}
        </div>

        
      </div>
    </div>
  );
};

export default EmailItem;