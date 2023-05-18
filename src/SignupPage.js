// SignupPage.js
import React, { useState } from 'react';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [ituEmail, setItuEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studyProgramme, setStudyProgramme] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
    console.log(`Name: ${name}, ITU Email: ${ituEmail}, Password: ${password}, Study Programme: ${studyProgramme}`);
    navigate('/confirmation');
  };

  return (
    <>
      <h1 className="headline">BookingBookz</h1>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="login-input"
            placeholder="ITU-mail"
            value={ituEmail}
            onChange={(e) => setItuEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            className="login-input"
            placeholder="Study Programme"
            value={studyProgramme}
            onChange={(e) => setStudyProgramme(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
