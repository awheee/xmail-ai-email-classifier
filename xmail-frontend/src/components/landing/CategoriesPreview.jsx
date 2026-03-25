import React from "react";

function CategoriesPreview() {
  const categories = [
    { name: "Important", color: "#2563eb" },
    { name: "Personal", color: "#16a34a" },
    { name: "Finance", color: "#ca8a04" },
    { name: "Travel", color: "#0d9488" },
    { name: "Promotions", color: "#9333ea" },
    { name: "Social", color: "#db2777" },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
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
          Intelligent Categories
        </h2>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "40px",
            fontSize: "16px",
          }}
        >
          Xmail understands context, not just keywords.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                fontWeight: "600",
                fontSize: "14px",
                color: cat.color,
              }}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesPreview;