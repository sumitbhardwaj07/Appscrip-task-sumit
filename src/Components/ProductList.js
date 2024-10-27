import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';


function ProductList() {

  const [products, setProducts ] = useState([]);

  const fetchProducts = async ()=>{
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      
      const data = await response.json();
      //console.log(data);
      const result = Object.values(data);
      //console.log(result);
      setProducts(result);
    } catch (error) {
      console.log("error while fetching", error)
    }
  } 

  useEffect(()=>{
    fetchProducts()
  },[]);

  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;