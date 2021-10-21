import React from "react";

const Menu = ({ handleOpenAlert }) => {
  return (
    <ul>
      <button onClick={handleOpenAlert}>Item 1</button>
      <button onClick={handleOpenAlert}>Item 2</button>
      <button onClick={handleOpenAlert}>Item 3</button>
    </ul>
  );
};

export default Menu;
