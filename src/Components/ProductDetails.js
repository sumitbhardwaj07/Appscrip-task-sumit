import { useParams } from "react-router-dom"
import "./ProductDetails.css"
import { useCallback, useEffect, useState } from "react";

const ProductDetails = ()=>{
    const id = useParams();
    //console.log(typeof(id.id))
    const userId = id.id;

    const [product, setProduct] = useState([]);

    const fetchProduct = useCallback(async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("error while fetching", error)
      } 
    }, [userId]); 
  
    useEffect(() => {
      fetchProduct();
    }, [fetchProduct]);

      //console.log(product.rating.count);

    return (
        <section className="product-detail">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-description">{product.description}</p>
            {product.rating && ( 
            <div className="product-rating">
              <span>Rating: {product.rating.rate} / 5</span>
              <span>({product.rating.count} reviews)</span>
            </div>
        )}
          </div>
        </section>
      );
};

export default ProductDetails;