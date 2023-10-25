import Navbar from "../components/Navbar"

import Hero from "../components/Hero";
import img1 from "../assets/29.jpg";
import Footer from "../components/Foooter";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <>
    <Navbar />
    <Hero
        cName="hero-mid"
        heroImg={img1} // Use the imported image variable here
        title="Contact"
        
        
        btnClass="hide"
    />
    <ContactForm/>
    <Footer/>

</>
    )
}
export default Contact;