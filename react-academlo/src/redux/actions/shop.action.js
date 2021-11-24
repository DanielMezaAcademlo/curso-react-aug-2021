import { shopTypes } from "../types/shop.types";

export const handleAddProductsAction = product => {
  return {
    type: shopTypes.ADD_PRODUCTS,
    payload: product
  };
};

export const handleDeleteProductsAction = ({ id, price }) => {
  return {
    type: shopTypes.DELETE_PRODUCTS,
    payload: { id, price }
  };
};

// export const handleSearchPokemon = pokemon => {
//   return async dispatch => {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemon}`
//     );
//     const result = await response.json();
//     dispatch(handlePokemonAction(result));
//   };
// };

export const handleSearchPokemon = pokemon => async dispatch => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const result = await response.json();
  dispatch(handlePokemonAction(result));
};

const handlePokemonAction = data => {
  return {
    type: "POKEMON",
    payload: data
  };
};
