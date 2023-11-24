import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'YOUR_PAYPAL_CLIENT_ID' }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          // Implement logic to create an order on your server
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          // Implement logic to capture the funds on your server
          return actions.order.capture().then((details) => {
            // Call your onSuccess callback
            onSuccess(details);
          });
        }}
        onError={(error) => {
          // Call your onError callback
          onError(error);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
