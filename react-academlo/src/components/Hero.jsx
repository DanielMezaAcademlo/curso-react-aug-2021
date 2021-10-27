import React from "react";

const Hero = ({ name, avatar }) => {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default Hero;
