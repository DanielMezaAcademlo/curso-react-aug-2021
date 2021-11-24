import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Styles
import "./Header.styles.css";

//Actions
import { handleDarkModeAction } from "../../../redux/actions/darkmode.action";
import { handleSearchPokemon } from "../../../redux/actions/shop.action";

const Header = () => {
  //Redux
  const dispatch = useDispatch();
  const { color } = useSelector(store => store.darkmode);
  const { cart, total } = useSelector(store => store.shop);

  const handleHeaderColor = e => {
    const color = e.target.value;
    dispatch(handleDarkModeAction(color));
  };

  return (
    <header
      className={`h-16 bg-${color} flex justify-between items-center mi-clase`}
    >
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">
        <Link to="/store">Context API</Link>
      </h2>

      <Link to={"/store/cart"}>Carrito de compras: {cart.length}</Link>
      <p>Total: {total}</p>

      <p className="mr-10 text-white block tablet:hidden">Menu</p>
      {/* <button
        className={`mr-10 ${darkMode ? "text-white" : "text-black"}`}
        onClick={handleDarkMode}
      >
        Dark Mode: {darkMode ? "On" : "Off"}{" "}
      </button> */}

      <button onClick={() => dispatch(handleSearchPokemon("pikachu"))}>
        Async
      </button>
      <select
        name=""
        id=""
        className="mr-10"
        onChange={e => handleHeaderColor(e)}
      >
        <option value="yellow" selected>
          Yellow
        </option>
        <option value="black">Dark</option>
        <option value="light_blue">Light Blue</option>
        <option value="main_blue">Main Blue</option>
      </select>
    </header>
  );
};

export default Header;
