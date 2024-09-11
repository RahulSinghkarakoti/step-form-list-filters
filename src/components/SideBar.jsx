import React from 'react';

const Sidebar = ({ filters, setFilters }) => {
  const handleSizeChange = (e) => {
    setFilters({ ...filters, size: e.target.value });
  };

  const handleColorChange = (e) => {
    setFilters({ ...filters, color: e.target.value });
  };

  const handleSortChange = (e) => {
    setFilters({ ...filters, sort: e.target.value });
  };

  return (
    <div className="w-1/4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Size</h3>
        <select onChange={handleSizeChange} value={filters.size} className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500  cursor-pointer">
          <option value="">All</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Color</h3>
        <select onChange={handleColorChange} value={filters.color} className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 cursor-pointer">
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="white">White</option>
          <option value="orange">Orange</option>
          <option value="violet">Violet</option>
          <option value="turquoise">Turquoise</option>
          <option value="purple">Purple</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Sort by Price</h3>
        <select onChange={handleSortChange} value={filters.sort} className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 cursor-pointer">
          <option value="">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
