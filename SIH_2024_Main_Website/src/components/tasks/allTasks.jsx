import React, { useEffect, useState } from "react";
import axios from "axios";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        // Fetch projects from the API
        const response = await axios.get("http://localhost:5000/api/projects");
        const projects = response.data;

        // Extract tasks from each project's taskList
        const allTasks = projects.flatMap((project) => project.taskList);

        // Set the tasks state
        setTasks(allTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchAllTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          All Tasks
        </h1>
        {tasks.length > 0 ? (
          <ul className="list-disc list-inside">
            {tasks.map((task) => (
              <li
                key={task._id}
                className={`text-gray-700 ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default AllTasks;
