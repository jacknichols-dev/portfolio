import React from "react";
import Hero from "../components/hero/hero.comp";
import WorksSection from "../components/works-section/works-section.comp";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <WorksSection />
    </div>
  );
};

export default Home;
