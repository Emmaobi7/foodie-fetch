import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar,
AiOutlineStar } from 'react-icons/ai';
import { ShopContext } from "./context/AppContext";
// import Product from './Product';


const ProductDetails = () => {
	const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
	const { qty, incQty, decQty, AddToCart } = useContext(ShopContext);

	// const [products, setProducts] = useState(null);
	// const [loadings, setLoadings] = useState(true);

	useEffect(() => {
		// Define the URL of your Flask backend endpoint to fetch a specific product by its ID
		const apiUrl = `http://localhost:5000/product/${id}`;
	
		axios.get(apiUrl)
		  .then((response) => {
			setProduct(response.data);
			setLoading(false);
		  })
		  .catch((error) => {
			console.error('Error fetching data:', error);
			setLoading(false);
		  });
	  }, [id]);
  
	// useEffect(() => {
	// // Define the URL of your Flask backend endpoint to fetch a specific product by its ID
	// const apiUrl = `http://localhost:5000/api/v1/products`;
	
	// axios.get(apiUrl)
	// 	.then((response) => {
	// 	    setProducts(response.data);
	// 		setLoadings(false);
	// 	})
	//     .catch((error) => {
	// 		console.error('Error fetching data:', error);
	// 		setLoadings(false);
	// 	});
	// }, []);

	if (loading) {
		return <p>Loading...</p>;
	}
	
	if (!product) {
	    return <p>Product not found.</p>;
	}
	
	// if (!products) {
	//     return <p>Product not found.</p>;
	// }
	
	return (
		<div>
			<div className="product-detail-container">
				<div className="image-container">
					<img
					src={product.image}
					width={500}
					height={500}
					alt="productdetails"
					/>
				</div>
				<div className="product-detail-desc">
					<h1>{product.name}</h1>
					<div className="reviews">
						<div>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(20)</p>
					</div>
					<h4>Details: </h4>
					<p>{product.description}</p>
					<p className="price">${product.price}</p>
					<div className="quantity">
						<h3>Quantity:</h3>
						<p className="quantity-desc">
							<span className="minus"
							onClick={decQty}><AiOutlineMinus /></span>
							<span className="num"
							onClick="">{qty}</span>
							<span className="plus"
							onClick={incQty}><AiOutlinePlus /></span>
						</p>
					</div>
					<div className="buttons">
						<button type="button"  
						   className="add-to-cart"
						   onClick={() => AddToCart(product, qty)}
						   >Add to Cart</button>
						<button type="button"
						 className="buy-now"
						 onClick="">Buy Now</button>
					</div>
				</div>
			</div>

			<div
			className="maylike-products-wrapper">
				<h2>You may also like</h2>
				{/* <div className="marquee">
					<div
					className="maylike-products-contain track">
						{products.map((item) => (
							<Product key={item.id}
							product={item} />
						))}
					</div>
				</div> */}
			</div>
		</div>
   );
};
	
export default ProductDetails;