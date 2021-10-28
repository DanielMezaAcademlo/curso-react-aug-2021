import React from "react";

//Router
import { Link } from "react-router-dom";

const Hero = ({ name, avatar, id }) => {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h4>{name}</h4>
      <button>
        <Link to={`/heroe/${id}/${name}`}>Ver más</Link>
      </button>
    </div>
  );
};

export default Hero;
