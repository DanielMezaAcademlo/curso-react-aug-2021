import { counterTypes } from "../types/counter.types";

const initialState = {
  value: 0
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterTypes.ADD:
      return {
        ...state,
        value: state.value + 1
      };

    case counterTypes.SUBS:
      return {
        ...state,
        value: state.value - 1
      };

    case counterTypes.ADD_DINAMICO:
      return {
        ...state,
        value: state.value + action.payload
      };

    default:
      return state;
  }
};
