import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import LoginFrom from './Component/LoginFrom/LoginFrom.jsx';
import Register from './Component/Register/Register.jsx';
import RegisterRBS from './Component/RegisterRBS/RegisterRBS.jsx';

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
      {
        path: "/register-rbs",
        element: <RegisterRBS></RegisterRBS> ,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
