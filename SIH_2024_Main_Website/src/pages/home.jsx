import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProjectNavigator from "../components/Project/projectNavigator";
import Image from "../assets/image.png";

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigationProjectDetails = () => {
    navigate("/projectDetails"); // Programmatic navigation
  };

  const handleNavigationCreateProject = () => {
    navigate("/createProject"); // Programmatic navigation
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Project Navigator
            </h2>
            <ProjectNavigator />
          </div>
          <div className="relative flex-1 rounded-lg shadow-md">
            <div className="relative h-[50vh] overflow-hidden rounded-lg">
              <img
                src={Image}
                alt="Descriptive alt text"
                className="object-cover w-full h-full border-2 border-gray-200 shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 ">
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
      </main>
    </div>
  );
}

export default Home;
