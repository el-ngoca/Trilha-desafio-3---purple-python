import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './styles/Global';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Signup } from './pages/signup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  
  },
  {
    path: "/login",
    element: <Login/>
  
  },
  {
    path: "/feed",
    element: <Feed/>
  
  },
  {
    path: "/signup",
    element: <Signup/>
  
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </React.StrictMode>
);


