import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import {
  addCounter,
  subsCounter,
  addDinamico
} from "../../redux/actions/counter.action";
const Example = () => {
  const [incremento, setIncremento] = useState(0);

  const dispatch = useDispatch();
  const { value } = useSelector(state => state.counter);

  const handleAdd1 = () => {
    dispatch(addCounter());
  };

  const handleSubs1 = () => {
    dispatch(subsCounter());
  };

  const handleAddDinamico = incremento => {
    dispatch(addDinamico(parseInt(incremento)));
  };

  return (
    <div>
      <h2>Redux example</h2>
      <p>Contador actual:{value} </p>

      <input
        type="number"
        placeholder="Incremento"
        onChange={e => setIncremento(e.target.value)}
      />

      <button onClick={handleAdd1}>Agregar</button>
      <button onClick={handleSubs1}>Quitar</button>
      <button onClick={() => handleAddDinamico(incremento)}>
        Agregar dinámico
      </button>
      <button>Reset</button>
    </div>
  );
};

export default Example;
