import React from 'react'
import { Link } from 'react-router-dom';


const Product = ({ product: { category, description, id,
  image, price,title
}}) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="product-card">
          <img
            src={image}
            alt="product-page"
            width={200}
            height={200}
            className="product-image"
          />
          <p className="product-name">{category}</p>
          <p className="product-price">${price}</p>
       </div>
      </Link>
    </div>
  )
};

export default Product;