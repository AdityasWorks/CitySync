import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProjectNavigator from "../components/Project/ProjectNavigator";
import Image from "../assets/image.png";

function Home() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleNavigationProjectDetails = () => {
    navigate("/projectDetails");
  };

  const handleNavigationCreateProject = () => {
    navigate("/createProject");
  };

  const handleAddTasks = () => {
    navigate("/addTasks"); // Navigate to the Add Tasks page
  };

  const handleViewMore = () => {
    navigate("/projectProgress");
  };

  const progressPercentage = 70; // Example progress percentage

  return (
    <div className="min-h-screen bg-gray-100">
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Project Navigator
              </h2>
              <ProjectNavigator onProjectClick={handleProjectClick} />
            </div>

            {isDropdownVisible && selectedProject && (
              <div className="mt-4 p-4 bg-gray-200 rounded-lg shadow-md">
                <button
                  onClick={handleAddTasks}
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Add Tasks
                </button>
                <button
                  onClick={handleViewMore}
                  className="ml-4 bg-green-600 text-white py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  View Progress
                </button>
              </div>
            )}
          </div>

          <div className="relative flex-1 rounded-lg shadow-md">
            <div className="relative h-[50vh] overflow-hidden rounded-lg">
              <img
                src={Image}
                alt="Descriptive alt text"
                className="object-cover w-full h-full border-2 border-gray-200 shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                <button
                  onClick={handleNavigationCreateProject}
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Create Project
                </button>
                <button
                  onClick={handleNavigationProjectDetails}
                  className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  See Projects
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Project Progress
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-6 mb-6">
            <div
              className="bg-blue-600 h-full rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">
              {progressPercentage}% Complete
            </span>
            <button
              onClick={handleViewMore}
              className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              View More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
