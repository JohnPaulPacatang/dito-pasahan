import React, { useState } from "react";

const JobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Designer",
    type: "Full Time",
    minSalary: "",
    maxSalary: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    setShowPreview(true); // Show the preview
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto p-8 relative">
        {/* Header */}
        <h2
          className="text-3xl font-bold text-white text-center py-4 rounded-t-lg mb-6"
          style={{
            background: "linear-gradient(90deg, #4A90E2, #50C9C3)",
          }}
        >
          Post a Job
        </h2>

        {/* Show Preview */}
        {showPreview ? (
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Job Preview
            </h3>
            <div className="space-y-4">
              <div>
                <p>
                  <strong>Job Title:</strong> {formData.title || "N/A"}
                </p>
              </div>
              <div>
                <p>
                  <strong>Category:</strong> {formData.category}
                </p>
              </div>
              <div>
                <p>
                  <strong>Type:</strong> {formData.type}
                </p>
              </div>
              <div>
                <p>
                  <strong>Salary:</strong> {formData.minSalary || "N/A"} -{" "}
                  {formData.maxSalary || "N/A"}
                </p>
              </div>
              <div>
                <p className="break-words">
                  <strong>Description:</strong> {formData.description || "N/A"}
                </p>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition duration-200"
                onClick={() => setShowPreview(false)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
                onClick={onClose}
              >
                Confirm Post
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handlePostJob}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Description */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description
                </label>
                <textarea
                  rows="10"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  placeholder="Write about the job in detail..."
                ></textarea>
              </div>

              {/* Right Column: Other Details */}
              <div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    placeholder="e.g., Product Designer"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  >
                    <option>Designer</option>
                    <option>IT</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  >
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Minimum Salary
                    </label>
                    <input
                      type="number"
                      name="minSalary"
                      value={formData.minSalary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      placeholder="e.g., 30000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Maximum Salary
                    </label>
                    <input
                      type="number"
                      name="maxSalary"
                      value={formData.maxSalary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      placeholder="e.g., 40000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
              >
                Post Job
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default JobModal;
