import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Email: ${email}, Password: ${password}`);

    // Make a POST request to the server with the email and password
    const response = await fetch('http://localhost:3001/LoginPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.text();
    console.log(data);

    navigate('/home');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
      <>
        <h1 className="headline">BookingBookz</h1>
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
                type="email"
                className="login-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <div className="password-container">
              <input
                  type={showPassword ? 'text' : 'password'}
                  className="login-input login-input-password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              <button
                  type="button"
                  className="show-password-button"
                  onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <button type="submit" className="login-button" onSubmit={handleSubmit}>
              Login
            </button>
            <div className="signup-forgot-container">
              <p>
                Don't have an account?{' '}
                <span className="signup-link"><Link to="/signup">Sign up here</Link></span>
              </p>
              <p className="forgot-password-link">Forgot your password</p>
            </div>
          </form>
        </div>
      </>
  );
};

export default LoginPage;