import "./HomePage.css";
import Trash_Hero from "../../assets/Trash-Hero.jpg";
import maps_slider from "../../assets/maps-slider.jpg";
// import travel_03 from "../../assets/travel-03.jpg";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/header/Navbar";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer"
import React from 'react';

function LandingPage(){
  
    
      return (
        <div className="">
          <Navbar />
          <Hero imageSrc={Trash_Hero} />

          <div className="cta-section">
                <h2>Join the Green Task Force</h2>
                <button className="cta-button">Join now</button>
            </div>
          <Slider
            imageSrc={maps_slider}
            title={"Why CleanCity?"}
            subtitle={
              "'Clean City' by the Colombo Municipal Council web application is designed to help local citizens report incidents of garbage and other waste. GTF members can report incidents using the web application's simple interface, and Green Captains and Admins can manage and approve these reports to keep the community clean and safe."
            }
          />

<div className="features-section">
<h2>Features</h2>
        <div className="features-wrapper">
        <div className="features-box">
          <img src={Trash_Hero} alt="Feature 1" />
          <p>Feature 1 description</p>
        </div>

        <div className="features-box">
          <img src={Trash_Hero} alt="Feature 2" />
          <p>Feature 2 description</p>
        </div>

        <div className="features-box">
          <img src={Trash_Hero} alt="Feature 3" />
          <p>Feature 3 description</p>
        </div>
        </div>
      </div>


          <Slider
            imageSrc={maps_slider}
            title={"Features."}
            subtitle={"Your dream vacation is only a few clicks away."}
            flipped={true}
          />
          

          <Footer/>
        </div>
      );
}

export default LandingPage;