import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import SingleCharacter from "./componentes/SingleCharacter";

function App() {
  //HOOKS
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const result = await response.json();
      setCharacters([...characters, ...result.results]); // --->[{}, {}, {}, {}]
    };
    handleData();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  //FUNCIONES

  return (
    <div className="App">
      {characters && characters.length > 0 ? (
        characters.map(character => (
          <SingleCharacter avatar={character.image} name={character.name} />
        ))
      ) : (
        <h3>No se encontraron resultados</h3>
      )}
      <button onClick={handleNextPage}>Ver más</button>
    </div>
  );
}

export default App;
