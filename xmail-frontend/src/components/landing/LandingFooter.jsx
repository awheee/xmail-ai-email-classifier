import React from "react";

function LandingFooter() {
  const handleGetStarted = () => {
    window.location.href = "http://127.0.0.1:8000/login";
  };

  return (
    <footer
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "800",
          marginBottom: "12px",
        }}
      >
        Ready to Organize Your Inbox?
      </h2>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "32px",
          color: "#e0e7ff",
        }}
      >
        Let AI handle the clutter while you focus on what matters.
      </p>

      <button
        onClick={handleGetStarted}
        style={{
          padding: "14px 32px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "white",
          color: "#2563eb",
          fontSize: "16px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Get Started with Google
      </button>

      <div
        style={{
          marginTop: "40px",
          fontSize: "14px",
          color: "#c7d2fe",
        }}
      >
        © {new Date().getFullYear()} Project Xmail · Built by Avi Jain
      </div>
    </footer>
  );
}

export default LandingFooter;