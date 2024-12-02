import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Features from "./components/FeaturesSection"
import ClientSection from "./components/ClientSection"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"



const App = () => {
  return 
    <div>
      <Navbar/>
      <HeroSection/>
      <ClientSection/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>;
};
export default App;
