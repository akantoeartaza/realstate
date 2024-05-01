import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data); 
      setFormData({
        fullname: '',
        username: '',
        email: '',
        password: ''
      });
      
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-image">
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <h2>Create your account</h2>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="username"
                placeholder="User Name"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Signup;
