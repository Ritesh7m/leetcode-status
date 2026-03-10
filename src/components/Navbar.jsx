const Navbar = () => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
    background: "rgba(15,17,23,0.85)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid var(--border)",
    height: 64,
  }}>
    <div style={{
      maxWidth: 1280, margin: "0 auto",
      padding: "0 20px", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: "linear-gradient(135deg, var(--amber), var(--orange))",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, boxShadow: "0 0 16px rgba(245,158,11,0.4)",
          flexShrink: 0,
        }}>⚡</div>
        <div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 18, color: "var(--text)", letterSpacing: -0.3, lineHeight: 1.1 }}>
            LeetStatus
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--amber)", letterSpacing: 1, textTransform: "uppercase" }}>
            Tracker
          </div>
        </div>
      </div>

      {/* Right badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 6,
        background: "var(--green-dim)", border: "1px solid rgba(16,185,129,0.25)",
        borderRadius: 99, padding: "6px 14px"
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%", background: "var(--green)",
          display: "inline-block", animation: "pulse-dot 2s infinite",
          flexShrink: 0,
        }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--green)", letterSpacing: 0.5 }}>
          Live API
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;