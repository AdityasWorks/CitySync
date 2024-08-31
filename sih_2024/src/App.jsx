import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/auth/login/index";
import Register from "./components/auth/register/index";
import Home from "./pages/home";

import { AuthProvider } from "../src/components/context/authContext/page";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="w-full h-screen flex flex-col">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
