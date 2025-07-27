import React, { useState } from "react";
import UsernameForm from "./components/UsernameForm";
import UserStats from "./components/UserStats";
import Footer from "./components/Footer";

export default function App() {
  const [status, setStatus] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 drop-shadow-sm">
          LeetCode Stats Tracker
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Enter your username to see your LeetCode stats.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4">
        <UsernameForm setStatus={setStatus} />
        <UserStats status={status} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}