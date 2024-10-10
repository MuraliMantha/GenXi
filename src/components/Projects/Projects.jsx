import React from "react";
import './Projects.css'; // Importing the CSS file

const Slideshow = () => {
  return (
    <div className= "slideshow-container" id='project-section'>
    <h1 className="slideshow-heading">Our Portfolio</h1>
    <p className="slideshow-para">At GenXi, we take pride in delivering innovative and impactful digital solutions tailored to meet the unique needs of our clients. Our portfolio reflects our commitment to excellence and our ability to drive business transformation through cutting-edge technology.</p>
      <div className="entire-content">
        <div className="content-carrousel">
          <figure className="shadow">
            <img src="./assets/temp1.png" alt="Slide 1"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp2.png" alt="Slide 2"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp3.png" alt="Slide 3"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp4.png" alt="Slide 4"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp5.png" alt="Slide 5"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp6.png" alt="Slide 6"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp7.png" alt="Slide 7"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp8.png" alt="Slide 8"/>
          </figure>
          <figure className="shadow">
            <img src="./assets/temp9.png" alt="Slide 9"/>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
