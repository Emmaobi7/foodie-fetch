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