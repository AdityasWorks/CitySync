import React, { useState } from "react";

const ProjectNavigator = () => {
  const [openProject, setOpenProject] = useState(null);

  const handleToggle = (projectId) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  const projects = [
    { id: 1, name: "Water Pipeline" },
    { id: 2, name: "Electricity Line" },
    { id: 3, name: "Gas Pipeline" },
  ];

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <div
            className="cursor-pointer bg-gray-200 p-4 rounded-lg"
            onClick={() => handleToggle(project.id)}
          >
            {project.name}
          </div>
          {openProject === project.id && (
            <div className="mt-2 bg-gray-100 p-4 rounded-lg">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-4"
                onClick={() => navigate("/addTasks")}
              >
                Add Task
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg"
                onClick={() => navigate("/projectProgress")}
              >
                View Progress
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectNavigator;
