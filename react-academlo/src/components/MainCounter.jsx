import React from "react";

//Styles
import "../styles/MainCounter.css";

const MainCounter = ({ counter }) => {
  return (
    <div className="container">
      <p>Valor del contador: {counter}</p>
      <p>Dark Mode: apagado</p>
    </div>
  );
};

export default MainCounter;
