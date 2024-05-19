import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Admin from './admin.jsx';
import Home from './component/home.jsx';
import About from './component/about.jsx';
import Login from './component/login.jsx';
import {createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  component: App,
  children: [
      {
        path: "/",
        element: <Home/>,
     },
      {
        path: "/about",
        element: <About/>,
     },
      {
        path: "/login",
        element: <Login/>,
     },
]
  },
  {
  path: "/admin",
  element: <Admin/>,
  component: Admin,
  }
])
export default router;

