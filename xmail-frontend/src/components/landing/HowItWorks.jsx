import React from "react";

function HowItWorks() {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "white",
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
          How It Works
        </h2>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "48px",
            fontSize: "16px",
          }}
        >
          Get started in seconds. No setup, no learning curve.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          <Step
            number="1"
            title="Login with Google"
            text="Securely connect your Gmail account using Google OAuth."
          />

          <Step
            number="2"
            title="AI Analyzes Your Inbox"
            text="Our AI reads email content and understands intent and context."
          />

          <Step
            number="3"
            title="Emails Get Organized"
            text="Your inbox is automatically categorized into meaningful groups."
          />
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, text }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "32px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#eef2ff",
          color: "#4338ca",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          marginBottom: "16px",
        }}
      >
        {number}
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#4b5563",
          lineHeight: "1.5",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default HowItWorks;