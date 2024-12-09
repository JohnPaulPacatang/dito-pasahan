import React, { useState } from "react";

function AdminLogin() {
  // Simple credentials for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login validation - to be changed when backend is done, maybe next sem...
    if (email === "admin@gmail.com" && password === "123") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-blue to-blue text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">Ready to create more opportunities?</h1>
        <p className="text-base md:text-lg text-center leading-relaxed">
          Manage job postings, connect with potential candidates, and shape the future of work.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md md:max-w-lg p-6 md:p-10 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">Admin Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4 md:mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
              <label className="inline-flex items-center mb-2 md:mb-0">
                <input type="checkbox" className="form-checkbox text-blue" />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
              {/* sa susunod a href na to */}
              <p className="text-blue text-sm hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4 md:mt-6">
            Don’t have an account?{' '}
            {/* sa susunod a href na rin to */}
            <span className="text-blue hover:underline cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
