import React from "react";
import { useParams } from "react-router-dom";
//Components
import AboutDescription from "../components/AboutDescription";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const About = () => {
  const data = useParams();
  console.log(data);
  return (
    <div>
      <AboutDescription />
      <Skills />
      <Contact />
    </div>
  );
};

export default About;
