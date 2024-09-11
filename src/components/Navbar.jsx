import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          
          <span className="text-xl font-bold">Ecommerce</span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-indigo-500 font-semibold">
            Login
          </button>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
