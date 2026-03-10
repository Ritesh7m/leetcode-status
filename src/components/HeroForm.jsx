import { useState } from "react";

const HeroForm = ({ onSubmit, loading }) => {
  const [username, setUsername] = useState("");
  const [focused, setFocused] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (username.trim()) onSubmit(username.trim());
  };

  const features = [
    { icon: "🎯", text: "Difficulty Split" },
    { icon: "🏆", text: "Global Rank" },
    { icon: "📈", text: "Acceptance %" },
    { icon: "🧠", text: "Contributions" },
    { icon: "📅", text: "Join Date" },
  ];

  return (
    <div style={{
      width: "100%", maxWidth: 480,
      padding: "0 4px",
      animation: "fadeUp 0.6s ease both",
    }}>
      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "var(--amber-dim)", border: "1px solid rgba(245,158,11,0.3)",
        borderRadius: 99, padding: "5px 14px", marginBottom: 24,
      }}>
        <span style={{ fontSize: 14 }}>⚡</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--amber)", letterSpacing: 1, textTransform: "uppercase" }}>
          LeetCode Stats Tracker
        </span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "clamp(2rem, 5vw, 3.2rem)",
        fontWeight: 900, lineHeight: 1.1,
        color: "var(--text)", marginBottom: 14, letterSpacing: -1,
      }}>
        Track your<br />
        <span style={{ color: "var(--amber)" }}>LeetCode grind</span> 🔥
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 15,
        color: "var(--text-muted)", marginBottom: 32,
        lineHeight: 1.7, maxWidth: 400,
      }}>
        Enter any LeetCode username to instantly visualize their full coding journey — rankings, streaks, difficulty breakdown and more.
      </p>

      {/* Form */}
      <div style={{
        background: "var(--bg2)", border: "1px solid var(--border)",
        borderRadius: "var(--radius)", padding: "24px",
        boxShadow: "var(--shadow)",
      }}>
        <label style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--text-muted)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
          Username
        </label>
        <form onSubmit={handle} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute", left: 14, top: "50%",
              transform: "translateY(-50%)", fontSize: 16,
              pointerEvents: "none", color: focused ? "var(--amber)" : "var(--text-faint)",
              transition: "color 0.2s",
            }}>👤</span>
            <input
              type="text"
              placeholder="e.g. neal_wu, tourist..."
              value={username}
              onChange={e => setUsername(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              required autoFocus
              style={{
                width: "100%",
                padding: "13px 14px 13px 44px",
                fontFamily: "'Outfit', sans-serif", fontSize: 15,
                background: "var(--bg3)",
                border: `1.5px solid ${focused ? "var(--amber)" : "var(--border)"}`,
                borderRadius: "var(--radius-sm)",
                color: "var(--text)", outline: "none",
                transition: "border 0.2s, box-shadow 0.2s",
                boxShadow: focused ? "0 0 0 3px rgba(245,158,11,0.15)" : "none",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "13px 20px",
              fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              fontSize: 15, letterSpacing: 0.3,
              background: loading
                ? "var(--bg3)"
                : "linear-gradient(135deg, var(--amber), var(--orange))",
              color: loading ? "var(--text-muted)" : "#0f1117",
              border: `1.5px solid ${loading ? "var(--border)" : "transparent"}`,
              borderRadius: "var(--radius-sm)",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: loading ? "none" : "0 4px 20px rgba(245,158,11,0.35)",
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
          >
            {loading ? (
              <>
                <span style={{ width: 16, height: 16, border: "2px solid var(--text-faint)", borderTopColor: "var(--amber)", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
                Fetching stats...
              </>
            ) : (
              <> <span>Get Stats</span> <span>→</span> </>
            )}
          </button>
        </form>
      </div>

      {/* Feature pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
        {features.map(f => (
          <span key={f.text} style={{
            display: "flex", alignItems: "center", gap: 5,
            fontFamily: "'Outfit', sans-serif", fontSize: 12,
            color: "var(--text-muted)",
            background: "var(--bg2)", border: "1px solid var(--border)",
            borderRadius: 99, padding: "4px 12px",
          }}>
            <span>{f.icon}</span> {f.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroForm;