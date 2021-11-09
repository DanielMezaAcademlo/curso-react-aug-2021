import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(10);

  //   const handleAdd1 = () => {
  //     setCounter(counter + 1);
  //   };

  //   const handleSubstract = () => {
  //     setCounter(counter - 1);
  //   };

  //   const handleAdd10 = () => {
  //     setCounter(counter + 10);
  //   };

  const handleCounter = action => {
    setCounter(
      action === "add"
        ? counter + 1
        : action === "substract"
        ? counter - 1
        : action === "add10"
        ? counter + 10
        : null
    );
  };

  return { counter, handleCounter };
};
