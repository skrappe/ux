import React from 'react';
import './HomePage.css';
import image1 from './images/Cheatsheet.jpeg';
import image2 from './images/CSS.png';
import image3 from './images/HTML.jpeg';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>BookingBookz</h1>
            <h2>Welcome to our website</h2>

            <div className="options-bar">
                <button>Loan</button>
                <button>Acquire</button>
            </div>

            <h3>Loan</h3>

            <div className="image-row">
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
                <img src={image3} alt="Image 3" />
            </div>

            <button className="view-all-books">View all books</button>

            <div className="publish-bar">
                <p>Publish your own books</p>
            </div>

            <div className="bottom-bar">
                <select name="options" id="options"></select>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    )
}

export default HomePage;
