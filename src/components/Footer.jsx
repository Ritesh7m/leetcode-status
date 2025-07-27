import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border-t border-white/30 dark:border-gray-700 shadow-sm fixed bottom-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-center">
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Made with <span className="text-red-500">❤️</span> by <span className="font-semibold text-indigo-700 dark:text-indigo-300">Ritesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
