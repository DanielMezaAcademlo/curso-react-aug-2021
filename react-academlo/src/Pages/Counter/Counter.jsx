import React, { useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
const Counter = () => {
  const { counter, handleCounter } = useCounter();

  return (
    <div>
      <div className="mt-10 w-1/2 m-auto flex justify-between items-center">
        <button onClick={() => handleCounter("add")}>Add</button>
        <button onClick={() => handleCounter("substract")}>Substract</button>
        <button onClick={() => handleCounter("add10")}>Add 10</button>
      </div>

      <p className="text-center mt-5">counter: {counter}</p>
    </div>
  );
};

export default Counter;
