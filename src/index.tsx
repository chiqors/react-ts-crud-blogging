import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
// Error Page
import { ErrorPage } from './ErrorPage';
// UI Layout
import { MainLayouts } from './layouts/MainLayouts';
// Views & Pages
import { Home } from './views/Home';
import { About } from './views/About';
import { Login } from './views/Login';
import Register from './views/Register';
import { ViewPost } from './views/posts/ViewPost';
import { AddPost } from './views/posts/AddPost';
import { EditPost } from './views/posts/EditPost';
// Library
import moment from 'moment';
moment.locale('id');

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/post/:id', element: <ViewPost /> },
      { path: '/post/create', element: <AddPost /> },
      { path: '/post/edit/:id', element: <EditPost /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
