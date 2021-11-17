import React, { useState, useReducer } from "react";
import "./App.css";

const initialState = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        counter: state.counter + 1
      };
    case "subs":
      return {
        counter: state.counter - 1
      };
    default:
      break;
  }
};

function App() {
  //UseState
  // const [counter, setCounter] = useState(0);
  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <button onClick={() => setCounter(counter + 1)}>Add 1</button>
      <button onClick={() => setCounter(counter - 1)}>subs 1</button> */}
      <button onClick={() => dispatch({ type: "add" })}>Add 1</button>
      <button onClick={() => dispatch({ type: "subs" })}>subs 1</button>
      <p>{state.counter}</p>
    </div>
  );
}

export default App;
