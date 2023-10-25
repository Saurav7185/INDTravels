import React, { useState } from 'react';
import './BookNowStyles.css';
import { Link } from 'react-router-dom';
import img from '../assets/16.jpg'
import Hero from './Hero';
function BookNowTemplate(props) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    selectedService: '',
    travelDate: '',
    travelTime: '',
    destinationDate: '',
    destinationTime: '',
    familyMembers: 1,
    numberOfDays: 1,
  });

  const servicePrices = {
    'Service 1': 50,
    'Service 2': 75,
    'Service 3': 100,
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check if all required fields are filled
    const isFormValid = Object.values(formData).every((field) => field !== '');
    setFormIsValid(isFormValid);

    if (name === 'selectedService' || name === 'numberOfDays') {
      const servicePrice = servicePrices[formData.selectedService] || 0;
      const daysPrice = formData.numberOfDays * 10;
      setTotalPrice(servicePrice + daysPrice);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      alert('Please fill in all the required fields.');
      return;
    }
    // Handle form submission or payment here
    // You can redirect the user to a payment gateway, for example
    // For this example, we'll just alert a message
    alert('Payment successful!'); // Replace this with your actual payment logic
  };

  return (
    
    <div className="book-now">
      
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Service:</label>
          <select
            name="selectedService"
            value={formData.selectedService}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Travel Date:</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Departure Time:</label>
          <input
            type="time"
            name="travelTime"
            value={formData.travelTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination Date:</label>
          <input
            type="date"
            name="destinationDate"
            value={formData.destinationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Arrival Time:</label>
          <input
            type="time"
            name="destinationTime"
            value={formData.destinationTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Price:</label>
          <span>${totalPrice}</span>
        </div>
        {formIsValid ? (
          <Link to="/payment">
            <button type="submit" className="pay-button">
              Pay Now
            </button>
          </Link>
        ) : (
          <p className="error-message">Please fill in all the required fields.</p>
        )}
      </form>
    </div>
   
  );
}

export default BookNowTemplate;
