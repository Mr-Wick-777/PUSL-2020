import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import CleanCityLogo from "../../assets/CleanCityLogo.png";
import { Link } from 'react-router-dom';

const Navbar = ({ navbarLinks }) => {
  // Determines if the "menu icon" was clicked or not. Note that this icon is only visible when the window width is small.
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" ><span className="navbar__logo"><img src={CleanCityLogo} alt="CleanCity" /></span></Link>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/incidents" className="navbar__link">Report Incidents</Link>
        </li>
        <li className="navbar__item">
          <Link to="/articles" className="navbar__link">Articles</Link>
        </li>
        <li className="navbar__item">
          <Link to="/gtflogin" className="navbar__link">GTF Login</Link>
        </li>
        <li className="navbar__item">
          <Link to="/gtflogin" className="navbar__link">Profile</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
