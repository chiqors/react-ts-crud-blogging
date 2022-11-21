import React from 'react';
import { PostList } from '../components/PostListComponent';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
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

        <div className="flex flex-col items-center justify-around max-w-4xl mt-6 sm:w-full">
          <PostList />
        </div>
      </main>
    </div>
  );
};
