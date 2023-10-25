
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import img1 from "../assets/30.jpg";
import Footer from "../components/Foooter";
import Trip from "../components/Trip";
function Service(){
    return(
        <>
        <Navbar />
        <Hero
            cName="hero-mid"
            heroImg={img1} // Use the imported image variable here
            title="Services"
            
            
            btnClass="hide"
        />
        <Trip/>
    
        <Footer/>
    
    </>
    )
}
export default Service;