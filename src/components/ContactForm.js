import React, { useState, useEffect } from 'react';
import './ContactFormStyles.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://example.com/api'; // Replace with your API URL

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an object with fields (name, email, subject, message)
        setFormData({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        });

        // Print the fetched data to the console
        console.log('Fetched Data:', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array [] ensures this effect runs only once on component mount

  return (
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form>
        <input
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          placeholder='Email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          placeholder='Subject'
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
        <textarea
          placeholder='Message'
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
