import React from "react";
import { Link } from "react-router-dom";
//Styles
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="h-16 bg-yellow flex justify-between items-center mi-clase">
      <h2 className="ml-10 text-3xl	text-white">Github API</h2>

      <button>
        <Link to="/pokemon">Pokemon</Link>
      </button>
    </header>
  );
};

export default Header;
