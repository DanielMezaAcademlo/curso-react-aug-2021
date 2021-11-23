import { counterTypes } from "../types/counter.types";

export const addCounter = () => {
  return {
    type: counterTypes.ADD
  };
};

export const subsCounter = () => {
  return {
    type: counterTypes.SUBS
  };
};

export const addDinamico = incremento => {
  return {
    type: counterTypes.ADD_DINAMICO,
    payload: incremento
  };
};
