import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroForm from "./components/HeroForm";
import UserStats from "./components/UserStats";
import "./index.css";

const fetchUserStatus = async (username) => {
  const response = await fetch(
    `https://leetcode-stats.tashif.codes/${username}`,
  );
  if (!response.ok) throw new Error("User not found");
  return response.json();
};

export default function App() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (username) => {
    setLoading(true);
    setError("");
    setStatus(null);
    try {
      const data = await fetchUserStatus(username);
      setStatus(data);
    } catch {
      setError(
        "User not found or API error. Double-check the username and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
      }}
    >
      {/* Ambient background blobs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -120,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      <Navbar />

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          paddingTop: 64,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Desktop: side-by-side | Mobile: stacked ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            padding: "0 16px",
            gap: 0,
          }}
        >
          {/* Left pane */}
          <div
            style={{
              flex: "1 1 340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(32px, 5vw, 64px) clamp(16px, 3vw, 40px)",
              borderRight: "1px solid var(--border)",
            }}
            className="hide-mobile"
          >
            <HeroForm onSubmit={handleSubmit} loading={loading} />
          </div>

          {/* Mobile: form on top */}
          <div
            className="hide-desktop"
            style={{
              width: "100%",
              padding: "32px 4px 0",
            }}
          >
            <HeroForm onSubmit={handleSubmit} loading={loading} />
          </div>

          {/* Right pane */}
          <div
            style={{
              flex: "1 1 340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(24px, 5vw, 64px) clamp(16px, 3vw, 40px)",
            }}
          >
            {loading ? (
              <div style={{ textAlign: "center", padding: 60 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    border: "3px solid var(--border)",
                    borderTopColor: "var(--amber)",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                    margin: "0 auto 16px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "var(--text-muted)",
                    fontSize: 15,
                  }}
                >
                  Fetching stats...
                </p>
              </div>
            ) : (
              <UserStats status={status} error={error} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
