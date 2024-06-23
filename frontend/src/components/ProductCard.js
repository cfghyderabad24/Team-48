// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
};

export default ProductCard;
