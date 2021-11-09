import React from "react";

const Menu = ({ items, handleName, handleFillName }) => {
  return (
    <>
      <input type="text" onChange={({ target }) => handleFillName(target)} />
      <ul>
        {items.map(item => (
          <li>
            <button onClick={() => handleName("Laura")}>{item}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
