import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PayPalButton from './PayPalButton';
import { ShopContext } from "./context/AppContext";


const CheckoutPage = ({ amount }) => {
    const { isLoggedIn } = useContext(ShopContext);


  if (!isLoggedIn) {
    // Redirect to the login page if the user is not logged in
    return <Redirect to="/login" />;
  }

  const handlePaymentSuccess = (details) => {
    // Implement logic for a successful payment
    console.log('Payment successful:', details);
  };
  
  const handlePaymentError = (error) => {
    // Implement logic for a payment error
    console.error('Payment error:', error);
  };
  

  return (
    <div>
      {/* Other checkout components */}
      <PayPalButton amount={amount} onSuccess={handlePaymentSuccess} onError={handlePaymentError} />
    </div>
  );
};

export default CheckoutPage;
