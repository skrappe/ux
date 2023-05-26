import React, { useState } from 'react';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [ituEmail, setItuEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studyProgramme, setStudyProgramme] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle signup logic here
    console.log(`Name: ${name}, ITU Email: ${ituEmail}, Password: ${password}, Study Programme: ${studyProgramme}`);

    // Make a POST request to the server with the entered data
    const response = await fetch('http://localhost:3001/SignupPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email: ituEmail, password, studyProgramme })
    });
    const data = await response.text();
    console.log(data);

    navigate('/confirmation');
  };

  return (
      <>
        <h1 className="headline">BookingBookz</h1>
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
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