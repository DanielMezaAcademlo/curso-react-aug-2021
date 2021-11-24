import { products } from "../../products";
import { shopTypes } from "../types/shop.types";

const initialState = {
  products,
  total: 0,
  cart: []
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.ADD_PRODUCTS:
      return {
        ...state,
        total: state.total + action.payload.price,
        cart: [...state.cart, action.payload]
      };

    case shopTypes.DELETE_PRODUCTS:
      return {
        ...state,
        total: state.total - action.payload.price,
        cart: state.cart.filter(product => product.id !== action.payload.id)
      };

    case "POKEMON":
      return {
        ...state,
        pokemon: action.payload
      };

    default:
      return state;
  }
};
