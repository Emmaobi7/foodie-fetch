import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
	const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


	useEffect(() => {
		// Define the URL of your Flask backend endpoint to fetch a specific product by its ID
		const apiUrl = `http://localhost:5000/api/v1/products/${id}`;
	
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
	
	  if (loading) {
		return <p>Loading...</p>;
	  }
	
	  if (!product) {
		return <p>Product not found.</p>;
	  }
	
	  return (
		<div>
			<div className="product-detail-container">
				<div className="image-container">
					<img
					src={product.image}
					alt="productdetails"
					/>
				</div>
			</div>
		</div>
	  );
	};
	
	export default ProductDetails;