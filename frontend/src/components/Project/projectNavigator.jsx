import React from "react";

const ProjectNavigator = () => {
  const projects = [
    { id: 1, name: "Water Pipeline" },
    { id: 2, name: "Electricity Line" },
    { id: 3, name: "Gas Pipeline" },
  ];

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <div className="bg-gray-200 p-4 rounded-lg">{project.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectNavigator;
