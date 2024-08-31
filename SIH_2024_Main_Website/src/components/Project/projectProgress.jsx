import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const ProjectProgress = () => {
  const [progressPercentage, setProgressPercentage] = useState(70); // Initial progress percentage
  const totalTasks = 5; // Total number of tasks
  const [tasksCompleted, setTasksCompleted] = useState(0); // Number of completed tasks
  const [taskStatus, setTaskStatus] = useState(Array(totalTasks).fill(false)); // Array to track completion status

  const handleTaskCompletion = (index) => {
    if (!taskStatus[index]) {
      const newTasksCompleted = tasksCompleted + 1;
      const newProgressPercentage = (newTasksCompleted / totalTasks) * 100;
      setTasksCompleted(newTasksCompleted);
      setProgressPercentage(newProgressPercentage);

      // Update the task status to prevent further clicks
      const updatedTaskStatus = [...taskStatus];
      updatedTaskStatus[index] = true;
      setTaskStatus(updatedTaskStatus);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <header>
        <Navbar />
      </header>

      <main className="mt-6 max-w-4xl mx-auto">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6 border border-gray-300">
          <div
            className="bg-blue-500 h-full rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <h1 className="text-2xl font-semibold">Project Progress</h1>
        <p className="mt-2 mb-6">
          The current project progress is at {progressPercentage}%.
        </p>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg shadow-md border border-gray-700"
            >
              <span>Task {index + 1}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleTaskCompletion(index)}
                  className={`${
                    taskStatus[index]
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-500"
                  } text-white py-1 px-3 rounded-lg`}
                  disabled={taskStatus[index]}
                >
                  Done
                </button>
                <button className="text-red-500 hover:text-red-400">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectProgress;
