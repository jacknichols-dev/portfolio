import React from "react";
import LatestProjects from "../latest-projects/latest-projects.comp";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <span className="hero__bubble hero__bubble--1"></span>
        <span className="hero__bubble hero__bubble--2"></span>
        <span className="hero__bubble hero__bubble--3"></span>
        <span className="hero__bubble hero__bubble--4"></span>
        <h1 className="hero__title">Jack Nichols</h1>

        <div className="skill-btn skill-btn__1">
          <p>Frontend Developer</p>
        </div>
        <div className="skill-btn skill-btn__2">
          <p>Web Designer</p>
        </div>
        <div className="skill-btn skill-btn__3">
          <p>Digital Artist</p>
        </div>
      </div>
      <div class="mouse"></div>
      <LatestProjects />
    </>
  );
};

export default Hero;
