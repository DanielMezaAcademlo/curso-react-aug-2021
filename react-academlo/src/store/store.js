import { createStore, combineReducers } from "redux";
//Reducers
import { counterReducer } from "../reducers/counter.reducer";
import { userReducer } from "../reducers/user.reducer";

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
