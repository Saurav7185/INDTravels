import React from "react"; // Import React
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../assets/27.jpg";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Foooter";

function About() {
  return (
    <>
    <Navbar />
    <Hero
        cName="hero-mid"
        heroImg={img1} // Use the imported image variable here
        title="About"
        
        
        btnClass="hide"
    />
   <AboutUs></AboutUs>
    <Footer/>

</>
  );
}

export default About;
