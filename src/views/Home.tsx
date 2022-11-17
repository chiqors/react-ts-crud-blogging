import React from 'react';
import Post from '../components/Post';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
        <h1 className="text-6xl font-bold text-center">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Blogpost
          </a>
        </h1>

        <p className="mt-3 text-2xl text-center">
          Here's our latest information!
        </p>

        <div className="flex flex-wrap items-center justify-around mt-6 w-full">
          <Post />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by{' '}
        <a
          className="font-bold ml-1"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.JS
        </a>
      </footer>
    </div>
  );
};
