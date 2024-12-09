import React, { useState } from "react";
import JobModal from "./JobModal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Job Portal</h1>
        <p className="text-lg text-gray-600 mb-6">
          Easily post jobs and manage your listings.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Post a Job
        </button>
      </div>

      {/* Modal */}
      <JobModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
