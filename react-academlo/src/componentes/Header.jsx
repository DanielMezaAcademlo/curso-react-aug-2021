import React, { useEffect } from "react";

//Components
import Menu from "./Menu";

//Styles
import "../styles/Header.styles.css";

const Header = ({ title, counter, handleOpenAlert, darkMode }) => {
  //HOOKS
  useEffect(() => {
    console.log("Hola desde Header.jsx");
  }, []);

  // const { title, counter } = props;
  // console.log(darkMode);
  return (
    <>
      <h2 className={darkMode ? "dark" : "white"}>{title}</h2>
      <h4>Contador de Header: {counter}</h4>
      <Menu handleOpenAlert={handleOpenAlert} />
    </>
  );
};

export default Header;
