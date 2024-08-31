import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProjectNavigator from "../components/Project/projectNavigator";

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = () => {
    navigate("/projectDetails"); // Programmatic navigation
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <section className="flex justify-center items-center p-4">
        <button
          onClick={handleNavigation}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Go to Target Page
        </button>
      </section>

      <section className="flex justify-between m-32">
        <div className="flex-1 bg-[#fbfafa] p-4 mr-4">
          <ProjectNavigator />
        </div>
        <div className="flex-1 bg-[#fbfafa] border border-black p-4 ml-4">
          Area 2
        </div>
      </section>
    </div>
  );
}

export default Home;
