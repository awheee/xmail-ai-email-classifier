import React from "react";

function LandingNavbar() {
  const handleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/login";
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "700" }}>
        Project Xmail
      </div>

      <button
        onClick={handleLogin}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          backgroundColor: "white",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Sign in
      </button>
    </nav>
  );
}

export default LandingNavbar;