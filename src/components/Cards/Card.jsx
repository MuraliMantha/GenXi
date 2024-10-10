import React from 'react';
import "./Card.css";

const Card = () => {
  return (
    <div id='card-section'>
    <h1 className='total-card-heading'>Our Services</h1>

    <div className="total-card-tech-container">
      <div className="total-card-1-container">
        <div className="total-card-1">
        <img src='./assets/web.png' className='card-web-logo' alt='web' />

          <h1 className="total-card-1-title">Web Development</h1>
          <p className="total-card-1-text">
            For web development, we offer dynamic, responsive, and user-friendly websites and applications. 
            We ensure cross-platform compatibility and top-notch performance with an emphasis on user experience.
          </p>
        </div>
      </div>

      <div className="total-card-1-container">
        <div className="total-card-1">
        <img src='./assets/and.png' className='card-and-logo' alt='web' />

          <h1 className="total-card-1-title">Android Development</h1>
          <p className="total-card-1-text">

            We build robust and scalable Android applications using modern frameworks.
            Our Android apps are designed to offer smooth performance, intuitive UI, and seamless integration with backend services.
          </p>
        </div>
      </div>

      <div className="total-card-1-container">
        <div className="total-card-1">
        <img src='./assets/dm.jpg' className='card-dm-logo' alt='web' />

          <h1 className="total-card-1-title">Digital Marketing Solutions</h1>
          <p className="total-card-1-text">
            Our digital marketing services use modern platforms to deliver data-driven results. 
            We integrate powerful tools such as Amazon AWS for infrastructure and scalable campaigns that maximize visibility and drive growth.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
