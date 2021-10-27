import React from "react";

//Styles
import "../styles/HeroContainer.css";

const HeroContainer = ({ children }) => {
  console.log(children);
  return <div className="hero-container">{children}</div>;
};

export default HeroContainer;
