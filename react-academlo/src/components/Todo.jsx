import React from "react";

const Todo = ({ title, status, handleTodo, id }) => {
  return (
    <div className="single-todo">
      <h1>{title}</h1>
      <button onClick={() => handleTodo(id)}>
        {status ? "Completed" : "Not completed"}
      </button>
    </div>
  );
};

export default Todo;
