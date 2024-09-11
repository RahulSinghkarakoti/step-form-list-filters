import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-500">Color: {product.color}</p>
        <p className="text-gray-500">Size: {product.size}</p>
        <p className="text-indigo-600 font-semibold mt-2">${product.price}</p>
        <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
