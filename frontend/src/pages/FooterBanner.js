import React from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>DISCOUNT</p>
          <h3>20% OFF</h3>
          <h3>BAG OF GARI</h3>
          <p>SALESTIME</p>

        </div>
        <div className="right">
          <p>stock up for hamattan!</p>
          <h3>HAMATTAN SALES</h3>
          <p>description</p>
          <Link href={`/product/${Product}`}>
            <button type="button">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner;