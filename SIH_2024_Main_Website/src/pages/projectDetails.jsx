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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Project Details
      </h1>
      {projects.length > 0 ? (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project._id}
              className="p-4 border border-gray-300 rounded-md"
            >
              <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
              <p>
                <strong>Description:</strong> {project.projectDescription}
              </p>
              <p>
                <strong>Area of Project:</strong> {project.areaOfProject}
              </p>
              <p>
                <strong>Deadline:</strong>{" "}
                {new Date(project.deadline).toLocaleDateString()}
              </p>
              <p>
                <strong>Budget Allocation:</strong> ${project.budgetAllocation}
              </p>
              <p>
                <strong>Resources Required:</strong> {project.resourcesRequired}
              </p>
              <p>
                <strong>Compliance and Resource:</strong>{" "}
                {project.complianceAndResource}
              </p>
              <p>
                <strong>Consent:</strong>{" "}
                {project.consent ? "Given" : "Not Given"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default ProjectDetails;
