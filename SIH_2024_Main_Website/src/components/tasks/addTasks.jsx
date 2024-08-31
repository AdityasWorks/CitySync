import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTasks = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const navigate = useNavigate(); // For navigation

  // Fetch projects when the component loads
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Handle task submission
  const handleTaskSubmit = async (e) => {
    e.preventDefault();

    if (!selectedProjectId) {
      alert("Please select a project first.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/api/projects/${selectedProjectId}/tasks`,
        {
          description: newTaskDescription,
        }
      );
      alert("Task added successfully");
      setNewTaskDescription("");

      // Refresh the tasks list
      const response = await axios.get(
        `http://localhost:5000/api/projects/${selectedProjectId}`
      );
      // Tasks are fetched and handled if needed

      // Redirect to another page upon successful task addition
      navigate("/some-other-page"); // Replace with the desired route
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Error adding task");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add Tasks
        </h1>

        <div className="mb-6">
          <label
            htmlFor="projectSelect"
            className="block text-sm font-medium text-gray-700"
          >
            Select Project
          </label>
          <select
            id="projectSelect"
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="" disabled>
              -- Select a project --
            </option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>

        <form onSubmit={handleTaskSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="taskDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Task Description
            </label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              rows="4"
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
