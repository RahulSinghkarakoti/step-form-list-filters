import React, { useState } from 'react'
import { Navbar, ProductList, Sidebar } from '../components';

function Ecommerce() {
  const [filters, setFilters] = useState({
    size: '',
    color: '',
    sort: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-100">
       <Navbar /> {/* Added Navbar */}
      <div className="flex max-w-7xl mx-auto px-4 py-6">
        
        <Sidebar filters={filters} setFilters={handleFilterChange} />
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
          <ProductList filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default Ecommerce
