# React TS CRUD Blogging
BlogPosting with jsonplaceholder

## Setup Instruction for Development

You need to have these installed:
- NodeJS v16+ & npm v7+
- Git

Installation:
1. Clone this [repo](https://gitlab.com/chiqors/tech-test.git)
2. Install the project with `npm install`
3. Open 2 Terminals / PowerShell / Command Prompt
4. Run the command `npm run jsonserver` to start up the JSON DB Server for the first terminal
5. Run the command `npm start` to start up the react web app
6. Enjoy :)

## Technology Used

Development Tools:
- Husky - Git Hooks with Bash Script (Used for doing action on pre/post-git events)
- CommitLint - Conventional Git Commit Messages (Used to stay with intended format for the commit messages)
- Prettier - Makes your code more comfortable to read (Used for stay with intended code style for all the dev codes)
- Tailwind - CSS Utility-First (Used for building UI Styles)
- PostCSS - Compiled CSS Tool (Used combined with tailwind to compile to pure CSS for build version. Minimized Size)

Backend Mock Server:
- json-server & json-server-auth - Local JSON Server (Used as a REST Service)

Frontend Tools:
- React - Base Code for building Frontend
- Moment.js - Time Formatting Library
- Axios - API Fetching Library (Support for older browser)
- React Router - Web URL Routing
- Typescript - JS Typing (Used for Intellisense Code, More DevEx)

Misc Tools:
- Testing Library (Unused, currently)

## Architecture

I do code with functional approach for this project, since this was purposed for small project. In my opinion, OOP designed for building large scale application at start. They do have pros and cons. It depends on lead developer for it.

Here's the essential information for the inside of src
- Components = UI Components and Reusable App Component will be placed here
- Layouts = UI Layouts for the web apps
- Types = Typing Code Intellisense for Typescript
- Utils = Backend Logic for Handling API
- Views = Pages for the website
- index.tsx = URL Routing & Main Core of the project
- ErrorPage.tsx = handling Error Page

Here's the essential information for the outside of src
- .gitignore = ignoring files that contain secret or temporary to be pushed to repository
- .prettierignore = ignoring specific path/file
- .prettierrc = config file of prettier
- commitlint.config.js = config file for commitlint
- db.json = json data for fake/practice database purpose that used by json-server
- tailwind.config.js = tailwind config file
- postcss.config.js = posscss config file

## UI Styling
I am used for designing UI with TailwindCSS. I put navbar for navigation. title and post component for everything. A little addition with pagination for loading more posts to the current state of data.
