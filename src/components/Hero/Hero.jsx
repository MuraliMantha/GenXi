import React from 'react'
import Meteors from '../magicui/meteors'
import "./Hero.css"

const Hero = () => {
  return (
    <div 
   id='hero-section' className="hero-container h-100 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
      <Meteors number={30} />
      <h1 className='hero-heading'>Transform Your Digital Experience</h1>
      <div className="hero-para-button-container">
        <p className='hero-para'>Dive into our cutting-edge services and bring your brand to life with our expert Android, web development, and digital marketing solutions.</p>
        <button className="hero-touch-button" onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>
              Let's Talk <span>&rarr;</span>
            </button>
      </div> 
   </div>
  )
}

export default Hero
