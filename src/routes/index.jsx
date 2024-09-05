import { useRoutes, Navigate } from "react-router-dom";
import React from 'react'
import Home from '../routes/home/Home.jsx'
import Login from '../routes/login/Login.jsx'
import Profile from '../routes/profile/Profile.jsx'
import { useSelector } from "react-redux";

const RouteController = () => {
  const token = useSelector(state => state.token)
  return useRoutes([
      {
        path: "/",
        element: <Home />
      
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/profile",
        element: token ? <Profile /> : <Navigate to="/login"  />
      }
  ])
}

export default RouteController