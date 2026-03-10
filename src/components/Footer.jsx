const Footer = () => (
  <footer style={{
    background: "var(--bg2)",
    borderTop: "1px solid var(--border)",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
    <p style={{
      fontFamily: "'Outfit', sans-serif",
      fontSize: 14,
      color: "var(--text-muted)",
      margin: 0,
    }}>
      Made with <span style={{ color: "#ef4444" }}>❤️</span> by{" "}
      <span style={{ color: "var(--amber)", fontWeight: 700 }}>Ritesh</span>
    </p>
  </footer>
);

export default Footer;