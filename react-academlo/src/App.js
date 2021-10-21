import React, { useState } from "react";
import "./App.css";

//Components
import Header from "./componentes/Header";
import Menu from "./componentes/Menu";

function App() {
  //state
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // const counter = 0

  //eventos/funciones
  const handleCounter = text => {
    if (text === "add1") {
      setCounter(counter + 1);
    } else if (text === "add10") {
      setCounter(counter + 10);
    } else {
      setCounter(0);
    }
  };

  const handleOpenAlert = () => {
    alert("Si funciona");
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // const handleAddCounter = () => {
  //   setCounter(counter + 1)
  // }

  // const handleAdd10Counter = () => {
  //   setCounter(counter + 10)
  // }

  // const handleResetCounter = () => {
  //   setCounter(0)
  // }

  return (
    <div className="App">
      <button onClick={() => handleCounter("add1")}>Add 1</button>
      <button onClick={() => handleCounter("add10")}>Add 10</button>
      <button onClick={() => handleCounter("reset")}>Reset</button>
      <button onClick={handleShowModal}>Show Modal</button>
      <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
      {/* <button onClick={() => setShowModal(!showModal)}>Show Modal</button> */}
      {/* <button onClick={handleAddCounter}>Add 1</button>
      <button onClick={handleAdd10Counter}>Add 10</button>
      <button onClick={handleResetCounter}>Reset</button> */}

      {/* {showModal ? (
        <Header
          counter={counter}
          title="Título :D"
          handleOpenAlert={handleOpenAlert}
        />
      ) : null} */}

      {showModal && (
        <Header
          counter={counter}
          title="Título :D"
          handleOpenAlert={handleOpenAlert}
          darkMode={darkMode}
        />
      )}

      {/* const Header = (counter) => {
        return (
          counter
        )
      } */}

      {/* <Menu handleOpenAlert={handleOpenAlert} /> */}
    </div>
  );
}

export default App;
