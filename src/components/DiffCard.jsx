const DiffCard = ({ label, solved, total, color, dimColor }) => {
  const pct = total ? Math.min(100, Math.round((solved / total) * 100)) : 0;

  return (
    <div style={{
      background: "var(--bg2)", border: "1px solid var(--border)",
      borderRadius: "var(--radius-sm)", padding: "16px 14px", textAlign: "center",
    }}>
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 32, height: 32, borderRadius: 8,
        background: dimColor, marginBottom: 8, fontSize: 16,
      }}>
        {label === "Easy" ? "✅" : label === "Medium" ? "🟡" : "🔴"}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 900, color, lineHeight: 1 }}>{solved ?? 0}</div>
      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "var(--text-faint)", marginTop: 2, marginBottom: 10 }}>of {total ?? "?"}</div>
      {/* Progress bar */}
      <div style={{ background: "var(--bg3)", borderRadius: 99, height: 5, overflow: "hidden" }}>
        <div style={{
          height: "100%", background: color,
          width: `${pct}%`, borderRadius: 99,
          transition: "width 1s ease",
          boxShadow: `0 0 6px ${color}80`,
        }} />
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--text-faint)", marginTop: 4 }}>{pct}%</div>
    </div>
  );
};

export default DiffCard;