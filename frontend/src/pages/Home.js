import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import FooterBanner from './FooterBanner';
import Product from './Product';
import '../App.css';
import axios from 'axios';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of your Flask backend endpoint
    const apiUrl = 'http://localhost:5000/api/v1/products';

    // Fetch the product data from the Flask backend
    axios.get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeroBanner/>

        <div className="products-heading">
          <h2> Best electronics products </h2>
          <p> Electronic Gadjets of all Sorts </p>
        </div>
        
        <div className="products-container">
          {products?.map((product) => <Product key={product.id}
          product={product} />
          )}
        </div>

      <FooterBanner/>
    </>
  )
}

export default Home;
