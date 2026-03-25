import React from "react";
import styles from "../styles/Inbox.module.css";

const CATEGORIES = [
  { name: "All", color: "#4285f4" },
  { name: "Important", color: "#ea4335" },
  { name: "Personal", color: "#34a853" },
  { name: "Finance", color: "#137333" },
  { name: "Social", color: "#a142f4" },
  { name: "Promotions", color: "#fbbc05" },
  { name: "Updates", color: "#46bdc6" },
  { name: "Spam", color: "#5f6368" },
];

export default function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <aside className={styles.sidebar}>
      <div
  className={styles.brand}
  onClick={() => (window.location.href = "/")}
  style={{ cursor: "pointer" }}
>
        <div className={styles.logoIcon}>X</div>
        <div>
          <h3 className={styles.brandTitle}>Xmail</h3>
<span className={styles.brandSubtitle}>
  AI-powered inbox
</span>
        </div>
      </div>

      <nav>
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className={`${styles.categoryItem} ${
              activeCategory === cat.name ? styles.activeCat : ""
            }`}
            onClick={() => setActiveCategory(cat.name)}
          >
            <span
              className={styles.catDot}
              style={{ backgroundColor: cat.color }}
            ></span>
            <span className={styles.catName}>{cat.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}