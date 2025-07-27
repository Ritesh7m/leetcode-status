import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-10 py-4 bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border-t border-white/20 dark:border-gray-600">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700 dark:text-gray-300">
        <p className="text-center sm:text-left">
          Made with <span className="text-red-500 text-lg">♥</span> by{" "}
          <span className="font-semibold">Ritesh</span>
        </p>

        <p className="text-center sm:text-right mt-2 sm:mt-0">
          © {new Date().getFullYear()} LeetCode Stats Tracker
        </p>
      </div>
    </footer>
  );
}