import React from "react";

//Router
import { useHistory } from "react-router-dom";

const CityInformation = ({ name }) => {
  //hooks router
  const history = useHistory();

  //Funciones
  const handleHistory = () => {
    console.log(history);
    history.push(`/weather/${name}`);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={handleHistory}>See more</button>
    </div>
  );
};

export default CityInformation;
