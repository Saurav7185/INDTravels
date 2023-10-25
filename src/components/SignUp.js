import React, { useState } from 'react';
import './SignUpStyles.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
    contactNo: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match. Please re-enter.");
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
        name: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
        contactNo: '',
      });
      window.alert("Your Data is Submitted");
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
    <div className='back'>
      <div className="center">
        <h1>SIGN IN / <Link to={'/'}>SIGN UP</Link></h1>
        <form onSubmit={handleSubmit}>
          <div className="txt">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="txt">
            <label>Contact No*</label>
            <input
              type="number"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Your Contact No"
            />
          </div>
          <div className="txt">
            <label>Email*</label>
            <input
              type="email"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
              placeholder="Email Id or Phone No."
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
              placeholder="Create Password"
              id="txtPassword"
            />
          </div>
          <div className="txt">
            <label>Confirm Password*</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              id="txtConfirmPassword"
            />
          </div>
          
          <input type="submit" className="sign price-btn" value="Submit" />
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Data</h2>
            <p>Name: {submittedData.name}</p>
            <p>Email or Phone No: {submittedData.emailOrPhone}</p>
            <p>Contact No: {submittedData.contactNo}</p>
          </div>
        )}

        {submittedData && (
          <Link to="/home" className="next-button">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

export default SignUp;
