import React, { useState } from "react";

const projects = [
  { id: 1, title: "Project 1", subtitle: "Road Construction" },
  { id: 2, title: "Project 2", subtitle: "Pipe Line Instruction" },
  { id: 3, title: "Project 3", subtitle: "Sewage Canal" },
];

const ProjectNavigator = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 w-full">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer ${
            expanded === project.id ? "bg-blue-100" : "bg-white"
          }`}
          onClick={() => toggleExpand(project.id)}
        >
          <div className="w-6 h-6 bg-purple-600 rounded-full mr-4"></div>
          <div className="flex flex-col">
            <div className="font-bold text-lg">{project.title}</div>
            <div className="text-sm text-gray-500">{project.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectNavigator;
