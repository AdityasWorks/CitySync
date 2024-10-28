import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch project details");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        Project Details
      </h1>
      {projects.length > 0 ? (
        <ul className="space-y-6">
          {projects.map((project) => (
            <li
              key={project._id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-700 mb-3">
                {project.projectName}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Description:</strong> {project.projectDescription}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Area of Project:</strong> {project.areaOfProject}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Deadline:</strong>{" "}
                {new Date(project.deadline).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Budget Allocation:</strong> ${project.budgetAllocation}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Resources Required:</strong> {project.resourcesRequired}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Compliance and Resource:</strong>{" "}
                {project.complianceAndResource}
              </p>
              <p className="text-gray-600">
                <strong>Consent:</strong>{" "}
                {project.consent ? "Given" : "Not Given"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No projects found.</p>
      )}
    </div>
  );
};

export default ProjectDetails;
