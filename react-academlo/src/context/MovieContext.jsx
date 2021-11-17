import React, { createContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const handleChangeList = movie => {
    setList([...list, movie]);
  };

  return (
    <MovieContext.Provider value={{ list, handleChangeList }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider };
export default MovieContext;
