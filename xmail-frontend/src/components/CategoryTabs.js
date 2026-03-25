import React from "react";

// Assign colors to categories
const categoryColors = {
  Important: "#007bff",
  Personal: "#28a745",
  Spam: "#dc3545",
  Social: "#6f42c1",
  Promotions: "#fd7e14",
  Updates: "#20c997",
  All: "#6c757d",
};

const CategoryTabs = ({ categories, selected, onSelect }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: selected === cat ? categoryColors[cat] || "#333" : "#f0f0f0",
            color: selected === cat ? "white" : "#333",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: selected === cat ? "0 2px 5px rgba(0,0,0,0.2)" : "none",
            transition: "all 0.2s ease",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;