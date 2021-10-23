import React from "react";

//Estilos
import "../styles/Header.css";

const Header = ({ sumar }) => {
  return (
    <header>
      <h4 className="logo">Logo</h4>

      <ul>
        <li>
          <a href="">Item</a>
        </li>
        <li>
          <a href="">Item</a>
        </li>
        <li>
          <a href="">Item</a>
        </li>
        <li>
          <button onClick={sumar}>Counter</button>
        </li>
        <li>
          <button href="">Dark mode</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
