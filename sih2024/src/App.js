import React, { useEffect, useState } from 'react';
import './App.css';

import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Home from "./pages/home";

import { AuthProvider } from "../src/components/context/authContext/page";
import { useRoutes } from "react-router-dom";

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';


function App() {

  const [loading, setLoading] = useState(false);

  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ];

  let routesElement = useRoutes(routesArray);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);

  return (
    loading ? (
      <div style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
      }}>
        <ClimbingBoxLoader
          size={30}
          color={'#000000'}
          loading={loading}
          className="loading-spinner"
        />
      </div>
    ) : (
      <AuthProvider>
        <div className="w-full h-screen flex flex-col">{routesElement}</div>
      </AuthProvider>
    )
  );

}


export default App
