import React from "react"
import './About.css'; // CSS file for styling

const About = () => {
  return (
    <div className="testimonial-section" id='about-section'>
        {/* Image Section */}
        <div className="testimonial-image">
          {/* <img src="./assets/about.webp" alt="Jordan Smith" /> */}
          <div className="video-container">
            <video width="100%" height="auto" controls>
                <source src="./assets/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text Section */}
        <div className="testimonial-content">
          <h1 className="testimonial-head">About GenXi</h1>
          <p className="testimonial-text">
            Welcome to GenXi, your trusted partner in Android development, web solutions, and digital marketing. We are a team of dedicated professionals passionate about transforming ideas into powerful digital experiences that drive results. With expertise across a wide range of technologies, we offer innovative, tailor-made solutions for businesses of all sizes.
          </p>
          
          <p className="testimonial-text">
            Our mission is to empower businesses through cutting-edge technology and creative digital strategies. We believe in providing seamless, user-friendly Android apps, high-performing websites, and targeted digital marketing campaigns that help you connect with your audience and grow your brand.
          </p>

          


          {/* <div className="testimonial-author">
            <h4>Nadeem Pasha</h4>
            <p>CTO, Tech Innovators</p>
          </div> */}
        </div>
    </div>
  );
};

export default About;