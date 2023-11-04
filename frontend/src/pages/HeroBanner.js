import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import veges from './veges1.jpg';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
        <div>
           <p className="beats-solo">SMALL TEXT</p>
           <h3>MID TEXT</h3>
           {/* <img src={veges} alt="vegetables"
           className="hero-banner-image" /> */}

           <div>
            <Link href="/product/ID">
                <button type="button"> BUTTON TEXT </button>
            </Link>
            
            <div className="desc">
                <h5> Description </h5>
                <p>DESCRIPTION</p>
            </div>
           </div>
        </div>
    </div>
  )
};

export default HeroBanner;