import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Styles
import "./Header.styles.css";

//Context
import DarkModeContext from "../../../Context/DarkModeContext";
import StoreContext from "../../../Context/StoreContext";

const Header = () => {
  const { darkMode, handleDarkMode } = useContext(DarkModeContext);
  const { cart, total } = useContext(StoreContext);

  return (
    <header
      className={`h-16  flex justify-between items-center mi-clase  ${
        darkMode ? "bg-black" : "bg-yellow"
      }`}
    >
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">
        <Link to="/store">Github API</Link>
      </h2>

      <Link to={"/store/cart"}>Carrito de compras</Link>

      <p>Carrito de compras: {cart.length}</p>
      <p>Total: {total}</p>

      <p className="mr-10 text-white block tablet:hidden">Menu</p>
      <button
        className={`mr-10 ${darkMode ? "text-white" : "text-black"}`}
        onClick={handleDarkMode}
      >
        Dark Mode: {darkMode ? "On" : "Off"}{" "}
      </button>
    </header>
  );
};

export default Header;
