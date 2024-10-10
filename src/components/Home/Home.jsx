import React from 'react'
import Hero from '../Hero/Hero';
import Slideshow from '../Projects/Projects';
import Card from '../Cards/Card';
import { IconCloudDemo } from '../Tech.jsx/Tech';
import JourneyOfInnovation from '../Journey/Journey';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import TeamSection from '../Team/Team';
import Contact from '../ContactUs/Contact';


export const Home = () => {
  return (
    <div id='home-section'>
    <Navbar />
        <Hero />
        {/* <ServicesCarousel /> */}
        <Slideshow />
        <IconCloudDemo />
        <Card />
        <JourneyOfInnovation />
        <About />
        <TeamSection />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home