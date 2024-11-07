import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import './Payment.css';

function Payment() {
  const location = useLocation();
  const { totalPrice, movie } = location.state || {};

  const [{ options, isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  
  const onCurrencyChange = ({ target: { value } }) => {
    if (value !== currency) {  
      setCurrency(value);
      paypalDispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: value,
        },
      });
    }
  };

  
  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice ? totalPrice.toFixed(2) : "0.00",
          },
        },
      ],
    });
  };


  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    }).catch((err) => {
      console.error("Payment approval error: ", err);
      alert("An error occurred during the payment approval.");
    });
  };

  
  useEffect(() => {
    if (!isPending && !scriptLoaded) {
      paypalDispatch({
        type: "resetOptions",
        value: {
          "client-id": "ATjq_6gq7yvLxEmhBmsY8U8o_6TAOlHdErnzWViqx1db9GPXEJcrnMYPM7mQ6vteIQdEulwqUOB_JH5J",  
          "currency": currency,
        },
      });
      setScriptLoaded(true);  
    }
  }, [currency, isPending, paypalDispatch, scriptLoaded]);

  return (
    <div className="checkout">
      <div className="checkout-page">
        <h2>Checkout Details</h2>
        <p><strong>Movie:</strong> {movie?.movieName}</p>
        <p><strong>Total Price:</strong> {currency === 'USD' ? `$${totalPrice}` : `€${totalPrice}`}</p>
      </div>

      {isPending ? (
        <p>Loading PayPal...</p>
      ) : (
        <>
          <div>
            <select value={currency} onChange={onCurrencyChange}>
              <option value="USD">💵 USD</option>
              <option value="EUR">💶 Euro</option>
            </select>
          </div>

          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={onCreateOrder}
            onApprove={onApproveOrder}
          />
        </>
      )}
    </div>
  );
}

function PaymentWrapper() {
  return (
    <PayPalScriptProvider options={{ "client-id": "ATjq_6gq7yvLxEmhBmsY8U8o_6TAOlHdErnzWViqx1db9GPXEJcrnMYPM7mQ6vteIQdEulwqUOB_JH5J", "currency": "USD" }}>
      <Payment />
    </PayPalScriptProvider>
  );
}

export default PaymentWrapper;
