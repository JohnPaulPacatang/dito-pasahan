import './App.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Ensure FontAwesome is imported

function DashboardCard({ number, label, icon, className }) {
  return (
    <div className={`dashboard-card ${className}`}>
      <div className="card-content">
        <div className="card-number">{number}</div>
        <div className="card-label">{label}</div>
      </div>
      <div className="card-icon">{icon}</div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="dashboard-header">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex">
        <DashboardCard 
          className="ml-4" 
          number="07" 
          label="Posted Jobs" 
          icon={<i className="fa-solid fa-user-circle"></i>} 
        />
        <DashboardCard 
          className="ml-4" 
          number="03" 
          label="Shortlisted" 
          icon={<i className="fa-solid fa-check-circle"></i>} 
        />
        <DashboardCard 
          className="ml-4" 
          number="1.7k" 
          label="Applications" 
          icon={<i className="fa-solid fa-paper-plane"></i>} 
        />
        <DashboardCard 
          className="ml-4" 
          number="04" 
          label="Saved Candidates" 
          icon={<i className="fa-solid fa-briefcase"></i>} 
        />
      </div>
    </div>
  );
}

export default Dashboard;
