// import "./HomePage.css";
import Trash_Hero from "../../assets/Trash-Hero.jpg";
import maps_slider from "../../assets/maps-slider.jpg";
import feature1 from "../../assets/feature1.svg";
import feature2 from "../../assets/feature2.svg";
import feature3 from "../../assets/feature3.svg";

// import travel_03 from "../../assets/travel-03.jpg";
import Hero from "../../components/hero/Hero";
import AdminNavbar from "../../components/header/AdminNavbar";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer"
// import { useInView } from "react-intersection-observer";
import React from 'react';


function CaptainHome(){
  // const { ref, inView } = useInView({
  //   /* Optional options */
  //   threshold: 0.1,
  // });
    
      return (
        <div className="dd">
          <AdminNavbar />

          <div className="cta-section">
                <h2>Clean City Admin</h2>
                
            </div>
          <Hero imageSrc={Trash_Hero} />

        
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
        <div className="features-box-1">
      
          <img src={feature1} alt="Feature 1" />
          </div>
          <div className="features-box-2">

          <p>Upload Photos of incidents</p>

          </div>
        </div>

        <div className="features-box">
        <div className="features-box-1">
          <img src={feature2} alt="Feature 2" />
          </div>

          <div className="features-box-2">
          <p>Set Location</p>
          </div>
        </div>

        <div className="features-box">
        <div className="features-box-1">
          <img src={feature3} alt="Feature 3" />
          </div>

          <div className="features-box-2">
          <p>Track the Status</p>
          </div>
        </div>
        </div>
      </div>


          <Slider
            imageSrc={maps_slider}
            title={"Clean City"}
            subtitle={"Contribute to make the world a better place"}
            flipped={true}
          />
          

          <Footer/>
        </div>
      );
}

export default CaptainHome;