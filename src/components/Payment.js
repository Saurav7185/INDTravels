import React, { useState } from 'react';
import './PaymentStyle.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add payment processing logic here
    console.log('Payment submitted with data:', formData);

    // Reset form fields to their initial values
    setFormData({
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: '',
    });

    // Set paymentSubmitted to true to trigger the Link to Signup
    setPaymentSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='payment-background'>
      <div className="payment-container">
        <h1>Payment Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder</label>
            <input
              type="text"
              name="cardHolder"
              id="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              id="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              required
            />
          </div>
          {paymentSubmitted ? (
            <Link to={'/home'}>
              <button className="payment-button">Proceed to HOME</button>
            </Link>
          ) : (
            <button type="submit" className="payment-button">
              Pay Now
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Payment;
