import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';


function ProductList({ Category }) {

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

  console.log(Category);

  const filteredProducts = Category === "All" ? products : products.filter(product => product.category === Category);

  console.log(filteredProducts)
  return (
    <section className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;