import React from "react";

//Router
import { Link } from "react-router-dom";

//Styles
import "../styles/Hero.css";

const Hero = ({ name, avatar, id, bio }) => {
  return (
    <div className="heroe-card">
      <img src={avatar} alt={name} />
      <h4>{name}</h4>

      {bio && (
        <>
          <h4>Fullname: {bio["full-name"]}</h4>
          <h4>First Appearance: {bio["first-appearance"]}</h4>
        </>
      )}

      <button className={bio ? "details" : "more"}>
        <Link to={bio ? "/" : `/heroe/${id}/${name}`}>
          {bio ? "Regresar" : "Ver más"}
        </Link>
      </button>
    </div>
  );
};

export default Hero;
