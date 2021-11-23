//1. Importaciones necesarias
import { createStore, combineReducers } from "redux";
//Reducers
import { counterReducer } from "../reducers/counter.reducer";
//2. CombineReducers

const reducers = combineReducers({
  counter: counterReducer
});

// {
//   counter: {
//     value: 0;
//   },
//   otrosReducers: {
//     propiedades: 0
//   }
// }

//3. Ceación y exportación del store

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
