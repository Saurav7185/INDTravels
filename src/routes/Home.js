import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/20.jpg";
import heroImage1 from "../assets/19.jpg";
import heroImage2 from "../assets/33.jpg";
import Destination from "../components/Destination";
import Footer from "../components/Foooter";
import BookNowTemplate from "../components/BookNow";


function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImage, heroImage1, heroImage2];

  useEffect(() => {
    // Function to switch to the next image
    const switchImage = () => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    };

    // Set an interval to switch images every 3 seconds
    const intervalId = setInterval(switchImage, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImages[currentImageIndex]}
        title="Your Journey Your Story"
        text="Choose your favorite Destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      
      <Footer />
     
      
      
      
    </>
  );
}

export default Home;
