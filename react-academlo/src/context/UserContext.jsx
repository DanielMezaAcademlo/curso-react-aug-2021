import React, { createContext, useReducer } from "react";

//1. Crear contexto
const UserContext = createContext();

//2. Provider

//3. Reducer e initialState
const initialState = {
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    state,
    dispatch
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
