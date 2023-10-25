import React, { useState } from 'react';
import './SignInStyles.css';
import { Link } from 'react-router-dom'; // Import Link for routing

function SignIn() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Define predefined email and password
  const predefinedEmail = 'sauravgupta2003.sg@gmail.com';
  const predefinedPassword = '1';

  const validateForm = () => {
    const { emailOrPhone, password } = formData;

    if (emailOrPhone !== predefinedEmail || password !== predefinedPassword) {
      alert("Invalid email or password. Please check and try again.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setSubmittedData(formData);
      console.log('Form data submitted:', formData); // Log the submitted data
      setFormData({
        emailOrPhone: '',
        password: '',
      });
      window.alert("Your are a member of INDTravels");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='SignIn'>
      <div className="center">
        <h1>SIGN UP / <Link to={'/signup'}>SIGN IN</Link></h1>
        <form onSubmit={handleSubmit}>
          <div className="txt">
            <label>Email*</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="txt">
            <label>Password*</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              id="txtPassword"
            />
          </div>
          <input type="submit" className="sign price-btn" value="Submit" />
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Data</h2>
            <p>Email: {submittedData.emailOrPhone}</p>
            <p>Password: {submittedData.password}</p>
          </div>
        )}
        
        {submittedData && ( // Render the "Next" button only if data is submitted
          <Link to="/home" className="next-button">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

export default SignIn;
