// const reducers = combineReducers({
//     users: userReducer,
//     counter: counterReducer
// })
const btn = document.getElementById("btn");

import { userReducer } from "./reducers/userReducer.js";
import { counterReducer } from "./reducers/counterReducer.js";

const store = {
  user: userReducer,
  counter: counterReducer
};

// console.log(store.user({ type: "" }));
// console.log(store.counter({ type: "" }));

// btn.onclick = () => {
//   console.log(store.counter({ type: "ADD" }));
//   console.log(store.user({ type: "" }));
// };

const { age, name } = store.user({
  type: "UPDATE",
  payload: { name: "Eduardo", age: 20 }
});
console.log(age, name);
