import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    

      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md mx-4
          rounded-3xl shadow-xl
          px-8 py-10
          flex flex-col
          backdrop-blur-md bg-white/30 dark:bg-slate-800/40 border border-white/30
          transition-shadow duration-300
          hover:shadow-2xl
          "
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-800 dark:text-indigo-200 text-center mb-6 drop-shadow">
          Check Your LeetCode Status
        </h1>
        <input
          type="text"
          placeholder="Enter Your LeetCode Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
          className="
            px-4 py-3
            rounded-xl
            bg-white/70 dark:bg-white/10
            text-base sm:text-lg text-gray-800 dark:text-gray-200
            mb-6 border border-gray-200 focus:border-indigo-500 outline-none
            shadow-inner
            focus:bg-white/90 dark:focus:bg-white/20
            transition-all duration-200
          "
        />
        <button
          type="submit"
          className="
            w-full
            px-4 py-3
            rounded-xl
            bg-gradient-to-r from-indigo-500 to-blue-600
            text-white font-semibold text-base sm:text-lg
            uppercase tracking-wide
            shadow-md
            hover:scale-105 hover:from-indigo-600 hover:to-blue-700 transition
            focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none
          "
        >
          Get Status
        </button>
      </form>
  
  );
};

export default UserForm;
