import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    areaOfProject: "",
    deadline: "",
    budgetAllocation: "",
    resourcesRequired: "",
    complianceAndResource: "",
    consent: false,
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/projects",
        formData
      );
      console.log("Project saved:", response.data);
      navigate("/discussionForum");
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Submit Project
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name *
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="areaOfProject"
              className="block text-sm font-medium text-gray-700"
            >
              Area of Project *
            </label>
            <input
              type="text"
              id="areaOfProject"
              name="areaOfProject"
              value={formData.areaOfProject}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Project Description *
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700"
          >
            Deadline *
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="budgetAllocation"
            className="block text-sm font-medium text-gray-700"
          >
            Budget Allocation *
          </label>
          <input
            type="number"
            id="budgetAllocation"
            name="budgetAllocation"
            value={formData.budgetAllocation}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="resourcesRequired"
            className="block text-sm font-medium text-gray-700"
          >
            Resources Required *
          </label>
          <textarea
            id="resourcesRequired"
            name="resourcesRequired"
            value={formData.resourcesRequired}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="complianceAndResource"
            className="block text-sm font-medium text-gray-700"
          >
            Compliance and Resource *
          </label>
          <textarea
            id="complianceAndResource"
            name="complianceAndResource"
            value={formData.complianceAndResource}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="consent"
            className="block text-sm font-medium text-gray-700"
          >
            Consent *
          </label>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
