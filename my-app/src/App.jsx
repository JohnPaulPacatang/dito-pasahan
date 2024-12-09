import React, { useState } from 'react';
import JobModal from './JobModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow hover:bg-blue-700 transition duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        Post a Job
      </button>

      <JobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
