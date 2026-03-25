import React from "react";

function PrivacySection() {
  return (
    <section
      style={{
        backgroundColor: "#f9fafb",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          Your Privacy Comes First
        </h2>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "48px",
            fontSize: "16px",
          }}
        >
          Project Xmail is designed with security and transparency at its core.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={cardTitle}>Read-Only Access</h3>
            <p style={cardText}>
              We only read your emails to classify them. We never modify,
              delete, or send emails on your behalf.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Google OAuth Secured</h3>
            <p style={cardText}>
              Authentication is handled directly by Google using industry-
              standard OAuth 2.0.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Revoke Anytime</h3>
            <p style={cardText}>
              You remain in full control. Access can be revoked anytime from
              your Google account settings.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>No Email Storage</h3>
            <p style={cardText}>
              Emails are processed temporarily for classification and are not
              permanently stored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "28px",
  border: "1px solid #e5e7eb",
  textAlign: "left",
};

const cardTitle = {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "8px",
};

const cardText = {
  fontSize: "14px",
  color: "#4b5563",
  lineHeight: "1.5",
};

export default PrivacySection;