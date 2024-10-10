import React from 'react';
import './Footer.css'; // CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Navigation Links */}
      <div className="footer-nav">
        <p className="footer-link" onClick={() => document.getElementById("about-section").scrollIntoView({behavior: "smooth"})}>About Genxi</p>
        <p className="footer-link" onClick={() => document.getElementById("card-section").scrollIntoView({behavior: "smooth"})}>Our Services</p>
        <p className="footer-link" onClick={() => document.getElementById("contact-section").scrollIntoView({behavior: "smooth"})}>Contact Us</p>
      </div>

      {/* Horizontal Divider */}
      <div className="footer-divider"></div>

      <div className='footer-social-container'>
        <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><img src='./assets/twit.png' alt='logo' className='logo' /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><img src='./assets/fb.png' alt='logo' className='logo' /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><img src='./assets/drib.png' alt='logo' className='logo' /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><img src='./assets/link.png' alt='logo' className='logo' /></a>
        </div>

        {/* Copyright Information */}
        <div className="footer-copyright">
            &copy; Genxi 2023, All Rights Reserved. Innovating the digital landscape.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
