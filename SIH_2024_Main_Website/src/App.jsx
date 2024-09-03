import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/auth/login/index";
import Register from "./components/auth/register/index";
import Home from "./pages/home";
import CreateProject from "./pages/createProject";
import ProjectDetails from "./pages/projectDetails";
import DiscussionForum from "./pages/discussionForum";
import ProjectProgress from "./components/Project/projectProgress";
import Tasks from "./components/tasks/addTasks";
import AllTasks from "./components/tasks/allTasks";
import MapMain from "./pages/map";

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
            <Route path="/projectProgress" element={<ProjectProgress />} />
            <Route path="/addTasks" element={<Tasks />} />
            <Route path="/allTasks" element={<AllTasks />} />
            <Route path="/mapMain" element={<MapMain />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
