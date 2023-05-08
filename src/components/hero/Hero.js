import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Garbage_Collected" className="hero__image" />
      <h1 className="hero__title">Protecting the Planet, One City at a Time</h1>
    </div>
  );
};

export default Hero;
