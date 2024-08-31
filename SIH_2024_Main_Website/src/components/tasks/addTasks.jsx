import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddTasks = () => {
  const { projectId } = useParams(); // Get project ID from route parameters
  const [taskDescription, setTaskDescription] = useState("");
  const navigate = useNavigate();

  const handleAddTask = async () => {
    try {
      await axios.post(`/api/projects/${projectId}/tasks`, {
        description: taskDescription,
      });
      navigate("/projectDetails"); // Redirect to project details page or any desired page
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl mx-4 md:mx-0 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add Task</h1>

        <div className="mb-6">
          <label
            htmlFor="taskDescription"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Task Description
          </label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows="6"
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task details here..."
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
          <button
            onClick={() => navigate("/projectDetails")}
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
