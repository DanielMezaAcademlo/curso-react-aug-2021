import React from "react";
//Router
import { useHistory, useLocation, useParams } from "react-router-dom";

const WeatherInformation = () => {
  //hooks router
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  console.log(history);
  console.log(location);
  console.log(params);

  //Funciones
  const handleHistory = () => {
    console.log(history);
    history.goBack();
  };

  return (
    <div>
      {location.pathname}
      <button onClick={handleHistory}>Ver</button>
    </div>
  );
};

export default WeatherInformation;
