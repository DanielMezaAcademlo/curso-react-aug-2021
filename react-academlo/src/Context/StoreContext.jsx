import React, { createContext, useReducer } from "react";

//Creamos el contexto
const StoreContext = createContext();

//Reducer

const initialState = {
  list: [
    {
      id: 1,
      name: "Producto 1",
      price: 250
    },
    {
      id: 2,
      name: "Producto 2",
      price: 550
    },
    {
      id: 3,
      name: "Producto 3",
      price: 100
    },
    {
      id: 4,
      name: "Producto 4",
      price: 320
    }
  ],
  cart: [],
  total: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        total: state.total - action.payload.price
      };

    default:
      return state;
  }
};

//Provider
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Funciones

  const data = {
    state,
    dispatch
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreContext;
export { StoreProvider };
