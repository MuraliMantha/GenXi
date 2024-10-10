import React from 'react';
import './Journey.css';

const JourneyOfInnovation = () => {
  const journeyData = [
    {
      icon: '🚀',
      title: 'Inception',
      description: 'Founded with a vision to revolutionize the digital landscape.',
    },
    {
      icon: '👥',
      title: 'Team Growth',
      description: 'Expanding our team with top-tier talent to drive innovation.',
    },
    {
      icon: '🏅',
      title: 'Achievements',
      description: 'Celebrating numerous awards and recognitions in the industry.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Connecting with clients and expanding our footprint worldwide.',
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Developing cutting-edge solutions for a digital-first world.',
    },
    {
      icon: '🤝',
      title: 'Client Partnerships',
      description: 'Building lasting partnerships with our clients for mutual success.',
    },
  ];

  return (
    <div className="journey-section" id='journey-section'>
      <h2>Our Journey of Innovation</h2>
      <p>
        Discover the milestones that have shaped Genxi into a leader in Android development, web
        development, and digital marketing.
      </p>
      <div className="journey-grid">
        {journeyData.map((item, index) => (
          <div key={index} className="journey-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyOfInnovation;
