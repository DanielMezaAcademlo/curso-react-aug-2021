import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import MainCounter from "./components/MainCounter";
import Todo from "./components/Todo";

const App = () => {
  //STATE
  const [counter, setCounter] = useState(0);
  const [dataAPI, setDataAPI] = useState([]);

  //EFFECT
  useEffect(() => {
    const handleDataAPI = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const todos = result.slice(0, 15);
      setDataAPI(todos);
    };

    handleDataAPI();
  }, []);

  //FUNCIONES
  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleTodo = id => {
    //Completed
    //id
    setDataAPI(
      dataAPI.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    // alert(id);
  };

  return (
    <div className="App">
      <Header sumar={handleAddCounter} />
      <MainCounter counter={counter} />

      {dataAPI.map(todo => {})}

      {dataAPI.map(todo => (
        <Todo
          title={todo.title}
          status={todo.completed}
          handleTodo={handleTodo}
          id={todo.id}
        />
      ))}
    </div>
  );
};

export default App;
