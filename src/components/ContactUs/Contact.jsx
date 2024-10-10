import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [activeTab, setActiveTab] = useState('login');
  //emailjs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_3nuwo0f';
    const templateId = 'template_zkwjvzj';
    const publicKey = '4ow9zSGHIwFlxWRS7';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Genxi',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <div className="login-signup-form-container" id='contact-section'>
      
        {activeTab === 'login' ? (
            <div className='login-signup-container'>
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Contact Us Via Email For Services</h2>
                    <input type='text'  value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <textarea rows="8" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your text here"></textarea>
                    <button type='submit' className="hero-touch-button">
                        Send Email <span>&rarr;</span>
                    </button>
                </form>
                <div className="signup-button-container">
                    <button
                        className="hero1-touch-button"
                        onClick={() => switchTab('signup')}
                    >
                        Join Us <span>&rarr;</span>
                    </button>
                </div>
                
            </div>
        ) : (
            <div className='login-signup-container'>
                <div className="signup-button-container">
                    <button
                        className="hero1-touch-button"
                        onClick={() => switchTab('login')}
                    >
                        Contact Us <span>&rarr;</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Wants to Join Our Dev Team</h2>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <textarea rows="8" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your text here"></textarea>
                    <button type='submit' className="hero-touch-button">
                        Send Email <span>&rarr;</span>
                    </button>
                </form>
            </div>
        )}
      </div>
  );
};

export default Contact;
