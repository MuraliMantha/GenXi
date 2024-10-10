import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import "./App.css"
import Hero from './components/Hero/Hero';
import Slideshow from './components/Projects/Projects';
import { IconCloudDemo } from './components/Tech.jsx/Tech';
import Card from './components/Cards/Card';
import JourneyOfInnovation from './components/Journey/Journey';
import About from './components/About/About';
import TeamSection from './components/Team/Team';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-component" element={<Hero />} />
        <Route path="/projects" element={<Slideshow />} />
        <Route path="/technologies" element={<IconCloudDemo />} />
        <Route path="/services" element={<Card />} />
        <Route path="/journey-of-innovation" element={<JourneyOfInnovation />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-tech-team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;