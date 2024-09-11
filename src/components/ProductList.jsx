import React from 'react'; 
import {  ProductCard } from '../components';


const products = [
  { id: 1, name: 'Red Dress', color: 'red', size: 'S', price: 50 },
  { id: 2, name: 'Blue Dress', color: 'blue', size: 'M', price: 60 },
  { id: 3, name: 'Green Dress', color: 'green', size: 'L', price: 70 },
  { id: 4, name: 'Purple Dress', color: 'purple', size: 'M', price: 80 },
  { id: 5, name: 'Yellow Dress', color: 'yellow', size: 'S', price: 90 },
  { id: 6, name: 'White Dress', color: 'white', size: 'M', price: 120 },
  { id: 7, name: 'Orange Dress', color: 'orange', size: 'L', price: 40 },
  { id: 8, name: 'Violet Dress', color: 'violet', size: 'L', price: 30 },
  { id: 9, name: 'Turquoise Dress', color: 'turquoise', size: 'M', price: 70 },
];

const ProductList = ({ filters }) => {
  let filteredProducts = products.filter((product) => {
    if (filters.size && product.size !== filters.size) return false;
    if (filters.color && product.color !== filters.color) return false;
    return true;
  });

  if (filters.sort === 'asc') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filters.sort === 'desc') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProducts.length ? (
        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
