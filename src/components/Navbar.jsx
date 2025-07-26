import React from 'react';

const Navbar = ({ onDownload }) => {
  return (
    <nav className="w-full bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border-b border-white/30 dark:border-gray-700 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-indigo-700 dark:text-indigo-300 font-bold text-xl sm:text-2xl select-none">
              LeetStatus
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
