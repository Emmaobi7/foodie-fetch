<<<<<<< HEAD
import React, { useEffect } from 'react';
import HeroBanner from './HeroBanner';
import FooterBanner from './FooterBanner';
import '../App.css';

const Home = () => {

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated")
      }
    })();
  });

  return (
    <>
      <HeroBanner/>

        <div className="products-heading">
          <h2> Best food ingredients </h2>
          <p> swallows and vegetables of all sorts </p>
        </div>

        <div className="products-container">
          {['product1 ', 'product 2'].map(
          (product) => product)}
        </div>

      <FooterBanner/>
    </>
  )
}

export default Home;
=======
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
          <h2> Best food ingredients </h2>
          <p> swallows and vegetables of all sorts </p>
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
>>>>>>> app_test
