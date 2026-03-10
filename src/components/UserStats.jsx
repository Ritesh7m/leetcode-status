import { useState, useEffect } from "react";
import StatCard from "./StatCard";
import DiffCard from "./DiffCard";

const EmptyState = () => (
  <div style={{ textAlign: "center", padding: "40px 20px", maxWidth: 380, margin: "0 auto" }}>
    <div style={{
      width: 72, height: 72, borderRadius: "50%",
      border: "2px dashed var(--border-hover)",
      display: "flex", alignItems: "center", justifyContent: "center",
      margin: "0 auto 16px", fontSize: 28, color: "var(--text-faint)",
    }}>📊</div>
    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
      Stats will appear here
    </p>
    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
      Enter a LeetCode username and hit{" "}
      <strong style={{ color: "var(--amber)" }}>Get Stats</strong> to see the full breakdown.
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 18 }}>
      {["Difficulty Split","Global Rank","Acceptance %","Reputation","Join Date"].map(t => (
        <span key={t} style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 12,
          color: "var(--text-faint)", background: "var(--bg2)",
          border: "1px solid var(--border)", borderRadius: 99, padding: "3px 12px",
        }}>{t}</span>
      ))}
    </div>
  </div>
);

const UserStats = ({ status, error }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (error) return (
    <div style={{ textAlign: "center", padding: "40px 20px", maxWidth: 360, margin: "0 auto" }}>
      <div style={{
        width: 64, height: 64, borderRadius: "50%",
        background: "var(--red-dim)", border: "1px solid rgba(239,68,68,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 14px", fontSize: 26,
      }}>😕</div>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 700, color: "var(--red)", marginBottom: 8 }}>
        User not found
      </p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
        {error}
      </p>
    </div>
  );

  if (!status) return <EmptyState />;

  const joinDate = status.joinDate
    ? new Date(status.joinDate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
    : "N/A";

  const progressPct = Math.min(100, Math.round(((status.totalSolved || 0) / 3000) * 100));

  return (
    <div style={{ width: "100%", maxWidth: 560, padding: isMobile ? "0 0 24px" : "0" }}>

      {/* ── Profile card ── */}
      <div className="fade-up" style={{
        background: "var(--bg2)", border: "1px solid var(--border)",
        borderRadius: "var(--radius)", padding: "18px",
        marginBottom: 12, boxShadow: "var(--shadow)",
        display: "flex", alignItems: "center", gap: 16, flexWrap: "nowrap",
      }}>
        {/* Avatar */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <img
            src={`https://leetcode.com/${status.username}/avatar.png`}
            alt="avatar"
            style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid var(--amber)", display: "block" }}
            onError={e => {
              e.target.src = `https://ui-avatars.com/api/?name=${status.username}&background=f59e0b&color=0f1117&bold=true&size=128`;
            }}
          />
          <span style={{
            position: "absolute", bottom: 1, right: 1,
            width: 12, height: 12, borderRadius: "50%",
            background: "var(--green)", border: "2px solid var(--bg2)",
          }} />
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(15px, 4vw, 20px)",
            fontWeight: 800, color: "var(--text)", marginBottom: 2,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {status.username}
          </div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>
            📅 Joined {joinDate}
          </div>
          {/* Progress bar */}
          <div style={{ background: "var(--bg3)", borderRadius: 99, height: 5, overflow: "hidden" }}>
            <div style={{
              height: "100%", borderRadius: 99,
              background: "linear-gradient(90deg, var(--amber), var(--orange))",
              width: `${progressPct}%`, transition: "width 1.2s ease",
              boxShadow: "0 0 8px rgba(245,158,11,0.5)",
            }} />
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: "var(--text-faint)", marginTop: 4,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {status.totalSolved} / ~3000 solved · {progressPct}%
          </div>
        </div>
      </div>

      {/* ── Difficulty cards ── */}
      <div className="fade-up-1" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 8, marginBottom: 10,
      }}>
        <DiffCard label="Easy"   solved={status.easySolved}   total={status.totalEasy}   color="var(--green)"  dimColor="var(--green-dim)" />
        <DiffCard label="Medium" solved={status.mediumSolved} total={status.totalMedium} color="var(--amber)"  dimColor="var(--amber-dim)" />
        <DiffCard label="Hard"   solved={status.hardSolved}   total={status.totalHard}   color="var(--red)"    dimColor="var(--red-dim)" />
      </div>

      {/* ── Stats grid: 1 col on small mobile, 2 col on wider ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: 8,
      }}>
        <div className="fade-up-2">
          <StatCard icon="🎯" label="Total Solved"     value={status.totalSolved}  accent="var(--text)"   dimColor="var(--bg3)" />
        </div>
        <div className="fade-up-3">
          <StatCard icon="📈" label="Acceptance Rate"  value={status.acceptanceRate ? status.acceptanceRate + "%" : "N/A"} accent="var(--blue)" dimColor="var(--blue-dim)" />
        </div>
        <div className="fade-up-4">
          <StatCard icon="🏆" label="Global Ranking"   value={status.ranking ? "#" + Number(status.ranking).toLocaleString() : "N/A"} accent="var(--amber)" dimColor="var(--amber-dim)" />
        </div>
        <div className="fade-up-5">
          <StatCard icon="🧠" label="Contribution Pts" value={status.contributionPoints} accent="var(--purple)" dimColor="rgba(167,139,250,0.12)" />
        </div>
        <div className="fade-up-6">
          <StatCard icon="🏅" label="Reputation"       value={status.reputation}   accent="var(--green)"  dimColor="var(--green-dim)" />
        </div>
        <div className="fade-up-6">
          <StatCard icon="📅" label="Join Date"        value={joinDate}            accent="var(--text-muted)" dimColor="var(--bg3)" />
        </div>
      </div>
    </div>
  );
};

export default UserStats;