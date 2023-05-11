import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
  <div className="container">
    
      <div className="left">
        <h3>About Us</h3>
        <p>'Clean City' by the Colombo Municipal Council web application is designed to help local citizens report incidents of garbage and other waste. GTF members can report incidents using the web application's simple interface, and Green Captains and Admins can manage and approve these reports to keep the community clean and safe."</p>
      </div>
      <div className="right">
        <h3>Quick Links</h3>
        <ul className="list-unstyled">
          <li><Link to="/" className="navbar__link">Home</Link></li>
          <li><Link to="/cleancitycaptainh" className="navbar__link">Captain</Link></li>
          <li><Link to="/cleancityadmin" className="navbar__link">Web Master Admin</Link></li>
        
        </ul>
     
        <h3>Connect With Us</h3>
        <ul className="list-unstyled social-links">
          {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li> */}
        </ul>
      </div>
    </div>

</footer>
  );
}

export default Footer;