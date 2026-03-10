import { useState } from "react";

const StatCard = ({ icon, label, value, accent = "var(--text)", dimColor = "var(--bg3)" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--bg3)" : "var(--bg2)",
        border: `1px solid ${hovered ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: "var(--radius-sm)",
        padding: "12px 14px",
        display: "flex", alignItems: "center", gap: 10,
        transition: "all 0.18s",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "var(--shadow)" : "none",
        cursor: "default",
        minWidth: 0,   /* ← critical: allows flex children to shrink */
      }}
    >
      <div style={{
        width: 34, height: 34, borderRadius: 9,
        background: dimColor, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 16,
        transition: "transform 0.18s",
        transform: hovered ? "scale(1.1)" : "none",
      }}>{icon}</div>

      <div style={{ minWidth: 0, flex: 1 }}>  {/* minWidth:0 lets text truncate */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, color: "var(--text-faint)",
          textTransform: "uppercase", letterSpacing: 1,
          marginBottom: 3,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{label}</div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(13px, 3vw, 17px)",
          fontWeight: 800, color: accent,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{value ?? "N/A"}</div>
      </div>
    </div>
  );
};

export default StatCard;