import React from 'react';

export const Footbar = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 w-full">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Powered by{' '}
        <a href="https://flowbite.com/" className="hover:underline font-bold">
          React.JS
        </a>
      </span>
    </footer>
  );
};
