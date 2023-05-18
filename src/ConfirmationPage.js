// ConfirmationPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <>
      <h1>Well done, you've signed up!</h1>
      <Link to="/">Go back home</Link>
    </>
  );
};

export default ConfirmationPage;
