import React from "react";

export default function UserStats({ status }) {
  if (!status) return null;

  const avatar = `https://leetcode.com/${status.username}/avatar.png`; // Try this URL for real avatars

  const joinDate = status.joinDate
    ? new Date(status.joinDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "N/A";

  return (
    <section className="max-w-lg mx-auto mt-10 p-6 bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border border-white/30 dark:border-gray-700 rounded-3xl shadow-lg transition-shadow hover:shadow-2xl">
      <h2 className="text-center text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4 drop-shadow-lg">
        Status for: <span className="underline">{status.username}</span>
      </h2>

      {/* ✅ Avatar Badge */}
      <div className="flex justify-center mb-6">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-indigo-400 shadow-lg"
          onError={(e) => (e.target.style.display = "none")} // hide if broken
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200 text-lg font-semibold">
        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">🎯</span>
          <span>Total Questions Solved: {status.totalSolved}</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">✅</span>
          <span>Easy: {status.easySolved}</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">🟡</span>
          <span>Medium: {status.mediumSolved}</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">🔴</span>
          <span>Hard: {status.hardSolved}</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">📈</span>
          <span>Acceptance Rate: {status.acceptanceRate}%</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">📊</span>
          <span>Ranking: {status.ranking ?? "N/A"}</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">🧠</span>
          <span>Contribution Points: {status.contributionPoints ?? "N/A"}</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">🏅</span>
          <span>Reputation Score: {status.reputation ?? "N/A"}</span>
        </li>

        <li className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-inner hover:bg-white/90 dark:hover:bg-white/20 transition">
          <span className="text-2xl">🗓️</span>
          <span>User Join Date: {joinDate}</span>
        </li>
      </ul>
    </section>
  );
}
