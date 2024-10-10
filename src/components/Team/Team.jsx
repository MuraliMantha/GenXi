import React from 'react';
import './Team.css';

const TeamSection = () => {
  return (
    <div className="team-section" id='teams-section'>
    
      <div className="team-grid">
        <div className="team-member">
          <img src="./assets/mmk.jpg" alt="Ethan" className="profile-pic" />
          <h3>Murali Krishna</h3>
          <p>@Full Stack Engineer</p>
        </div>
        <div className="team-member">
          <img src="./assets/nadeem.jpg" alt="Noah" className="profile-pic" />
          <h3>Nadeem Arqum</h3>
          <p>@Digital Marketing Expert</p>
        </div>
        <div className="team-member">
          <img src="./assets/genxi.png" alt="Olivia" className="profile-pic" />
          <h3>Thrinath</h3>
          <p>@Full stack Engineer</p>
        </div>
        <div className="team-member">
          <img src="./assets/genxi.png" alt="Emma" className="profile-pic" />
          <h3>Farhan Haneef</h3>
          <p>@Ui/Ux Design Engineer</p>
        </div>
      </div>
      <div className="community-text">
        <h2>A Community of Innovators</h2>
        <p>
          Join a thriving community of creative professionals who are pushing the boundaries
          of digital innovation.
        </p>
        <button className="hero-touch-button" onClick={() => document.getElementById("contact-section").scrollIntoView({behavior: "smooth"})}>
          Join Us <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
