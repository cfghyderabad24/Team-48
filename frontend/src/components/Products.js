// src/components/ProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';
import './Products.css'

const products = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tHJ-kHT17hPCWO8ClCVpcdwsHORQOql_sA&s',
    title: 'Product 1',
    description: 'Description for Product 1',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tHJ-kHT17hPCWO8ClCVpcdwsHORQOql_sA&s',
    title: 'Product 2',
    description: 'Description for Product 2',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tHJ-kHT17hPCWO8ClCVpcdwsHORQOql_sA&s',
    title: 'Product 3',
    description: 'Description for Product 3',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tHJ-kHT17hPCWO8ClCVpcdwsHORQOql_sA&s',
    title: 'Product 4',
    description: 'Description for Product 4',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tHJ-kHT17hPCWO8ClCVpcdwsHORQOql_sA&s',
    title: 'Product 5',
    description: 'Description for Product 5',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tHJ-kHT17hPCWO8ClCVpcdwsHORQOql_sA&s',
    title: 'Product 6',
    description: 'Description for Product 6',
  },
];

const Products = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Products;
