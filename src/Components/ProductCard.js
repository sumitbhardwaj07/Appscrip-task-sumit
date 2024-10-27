import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/${product.id}`}>
      <img src={product.image} alt={product.name} />
      </Link>
      <h4>{product.title}</h4>
      <h5>$ {product.price}</h5>
    </div>
  );
}

export default ProductCard;