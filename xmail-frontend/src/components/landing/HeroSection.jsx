import React from "react";

function HeroSection() {
  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/login";
  };

  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px 80px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "6px 14px",
          borderRadius: "999px",
          backgroundColor: "#eef2ff",
          color: "#4338ca",
          fontWeight: "600",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        AI-Powered Email Organization
      </span>

      <h1
        style={{
          fontSize: "48px",
          fontWeight: "800",
          lineHeight: "1.1",
          margin: "24px 0",
        }}
      >
        Your Gmail,
        <br />
        Intelligently Organized
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#4b5563",
          maxWidth: "700px",
          margin: "0 auto 32px",
        }}
      >
        Project Xmail securely connects to your Gmail and uses AI to categorize
        your emails into meaningful groups like Important, Personal, Finance,
        and more — so you can focus on what actually matters.
      </p>

      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "14px 28px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          backgroundColor: "white",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Continue with Google
      </button>

      <p
        style={{
          marginTop: "12px",
          fontSize: "14px",
          color: "#6b7280",
        }}
      >
        Secured by Google OAuth · Read-only access
      </p>
    </section>
  );
}

export default HeroSection;