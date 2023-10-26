import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import LoginFrom from './Component/LoginFrom/LoginFrom.jsx';
import Register from './Component/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <App></App> ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/loginfrom",
        element: <LoginFrom></LoginFrom> ,
      },
      {
        path: "/register",
        element: <Register></Register> ,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
