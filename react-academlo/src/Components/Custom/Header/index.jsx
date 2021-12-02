import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { handleLogoutAction } from "../../../redux/actions/login.action";

//Styles
import "./Header.styles.css";

const Header = () => {
  //Redux
  const dispatch = useDispatch();

  return (
    <header
      className={`h-16 bg-red flex justify-between items-center mi-clase`}
    >
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">
        <Link to="/">Redux API</Link>
      </h2>

      <ul className="w-1/4 flex justify-between items-center px-5 text-white font-semibold">
        <li>
          <Link to="/images">Imágenes</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li>
          <button onClick={() => dispatch(handleLogoutAction())}>Logout</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
