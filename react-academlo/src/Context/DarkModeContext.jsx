import React, { createContext, useState, useReducer } from "react";

//Crear contexto
const DarkModeContext = createContext();

const initialState = {
  color: "yellow"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "YELLOW":
      return {
        ...state,
        color: "yellow"
      };

    case "MAIN_BLUE":
      return {
        ...state,
        color: "main_blue"
      };

    case "LIGHT_BLUE":
      return {
        ...state,
        color: "light_blue"
      };

    case "DARK":
      return {
        ...state,
        color: "black"
      };
    default:
      return state;
  }
};

//Crear Provider
const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };

  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export { DarkModeProvider };
export default DarkModeContext;
