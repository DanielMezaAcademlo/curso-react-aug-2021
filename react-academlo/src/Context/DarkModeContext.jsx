import React, { createContext, useState } from "react";

//Crear contexto
const DarkModeContext = createContext();

//Crear Provider

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  //Funciones
  const handleDarkMode = () => setDarkMode(!darkMode);

  const data = { darkMode, handleDarkMode };

  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export { DarkModeProvider };
export default DarkModeContext;
