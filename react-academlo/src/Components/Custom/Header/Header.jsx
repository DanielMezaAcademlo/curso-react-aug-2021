import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Styles
import "./Header.styles.css";

//Context
import DarkModeContext from "../../../Context/DarkModeContext";
import StoreContext from "../../../Context/StoreContext";

const Header = () => {
  const { state, dispatch } = useContext(DarkModeContext);
  //const { state } = useContext(StoreContext);

  const handleHeaderColor = e => {
    console.log(e.target.value.toUpperCase());
    dispatch({ type: e.target.value.toUpperCase() });
  };

  return (
    <header
      className={`h-16 bg-${state.color} flex justify-between items-center mi-clase`}
    >
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">
        <Link to="/store">Context API</Link>
      </h2>

      <Link to={"/store/cart"}>Carrito de compras</Link>

      {/* <p>Carrito de compras: {state.cart.length}</p>
      <p>Total: {state.total}</p> */}

      <p className="mr-10 text-white block tablet:hidden">Menu</p>
      {/* <button
        className={`mr-10 ${darkMode ? "text-white" : "text-black"}`}
        onClick={handleDarkMode}
      >
        Dark Mode: {darkMode ? "On" : "Off"}{" "}
      </button> */}
      <select
        name=""
        id=""
        className="mr-10"
        onChange={e => handleHeaderColor(e)}
      >
        <option value="yellow" selected>
          Yellow
        </option>
        <option value="dark">Dark</option>
        <option value="light_blue">Light Blue</option>
        <option value="main_blue">Main Blue</option>
      </select>
    </header>
  );
};

export default Header;
