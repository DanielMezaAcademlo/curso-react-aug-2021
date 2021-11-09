import React from "react";

//Components
import Menu from "./Menu";

const Header = ({ menu, handleName, handleFillName }) => {
  return (
    <>
      <h2>Logo</h2>
      <Menu
        items={menu}
        handleName={handleName}
        handleFillName={handleFillName}
      />
    </>
  );
};

export default Header;
