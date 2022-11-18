import React from 'react';

export const About = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">
        About{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          Blogpost
        </a>
      </h1>

      <p className="mt-3 text-2xl">
        This is a blogpost app built with React.JS version 18
      </p>
    </main>
  );
};
