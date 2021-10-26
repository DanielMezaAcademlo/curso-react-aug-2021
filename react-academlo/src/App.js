import React, { useState, useEffect } from "react";

//Components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Loader from "./components/Loader";

//Styles
import "./styles/App.css";

const App = () => {
  //STATE
  const [todoList, setTodoList] = useState([]);

  //EFFECT

  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      // setTimeout(() => {
      setTodoList(resultTodoList);
      // }, 2000);
    };
    handleTodoList();
  }, []);

  //FUNCIONES
  const handleCompleteTodo = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />

      <div className="todo-container">
        {todoList && todoList.length > 0 ? (
          todoList.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompleteTodo}
              id={singleTodo.id}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
