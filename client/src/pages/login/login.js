import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './login.css';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Initialize navigate
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token } = response.data;
      localStorage.setItem('token', token);

      console.log(response.data); 
      setFormData({
        email: '',
        password: ''
      });
      setIsLoggedIn(true); 
      navigate('/profile'); // Redirect to profile page using navigate

    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
 
      <div className="login-page">
        <div className="login-container">
          <div className="login-image">
          </div>
          <div className="login-form">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default Login;
