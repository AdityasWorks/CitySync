import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/auth/login/index";
import Register from "./components/auth/register/index";
import Home from "./pages/home";
import CreateProject from "./pages/createProject";
import ProjectDetails from "./pages/projectDetails";
import DiscussionForum from "./pages/discussionForum";

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
            <Route path="/createProject" element={<CreateProject />} />
            <Route path="/projectDetails" element={<ProjectDetails />} />
            <Route path="/discussionForum" element={<DiscussionForum />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
