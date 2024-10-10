import React, { useState } from 'react';
import './Navbar.css'; // CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the dialog
  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <a href='/'><img src="./assets/genxi.png" alt="Logo" className='genxi-logo'/></a>
      </div>

      {/* Web View Navigation Links */}
      <ul className="nav-web-links">
        <li><a href="/">Homepage</a></li>
        <li onClick={() => document.getElementById("card-section").scrollIntoView({behavior: "smooth"})}>Services</li>
        <li onClick={() => document.getElementById("about-section").scrollIntoView({behavior: "smooth"})}>About Us</li>
      </ul>

      {/* Web View Buttons */}
      <div className="nav-web-buttons">
       
        <button className="hero-touch-button" onClick={() => document.getElementById("contact-section").scrollIntoView({behavior: "smooth"})}>
          Join us <span>&rarr;</span>
        </button> 
        
        <button className="hero-touch-button" onClick={() => document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'})}>
          Contact us <span>&rarr;</span>
        </button>
        
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="hamburger" onClick={toggleDialog}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Dialog Box for Mobile View */}
      {isOpen && (
        <div className="dialog-box">
          <button className="close-btn" onClick={toggleDialog}>
            &times;
          </button>

          {/* Navigation Links */}
          <ul className="nav-links-dialog">
            <li><a href="/">Homepage</a></li>
            <li onClick={() => {toggleDialog();
            document.getElementById("card-section").scrollIntoView({behavior: "smooth"})}}>Services</li>
            <li onClick={() => {toggleDialog();
            document.getElementById("about-section").scrollIntoView({behavior: "smooth"})}}>About Us</li>
          </ul>

          {/* Buttons Section */}
          <div className="nav-buttons-dialog">
            <button
                className="hero-touch-button"
                onClick={() => {
                  toggleDialog();
                  document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join us <span>&rarr;</span>
              </button>
            <button 
              className="hero-touch-button" 
                onClick={() => {
                  toggleDialog();
                  document.getElementById("contact-section").scrollIntoView({behavior: "smooth"})
              }}>
              Contact us <span>&rarr;</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
