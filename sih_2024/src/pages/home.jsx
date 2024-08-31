import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProjectNavigator from "../components/Project/projectNavigator";

function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <section></section>

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
