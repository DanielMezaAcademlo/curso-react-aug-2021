import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Store from "./Pages/Store/Store";
import Cart from "./Pages/Cart/Cart";
import Example from "./Pages/Example/Example";
import Login from "./Pages/Login/Login";
//Layout
import MainLayout from "./Layouts/MainLayout";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        {/* <MainLayout> */}
        <Route path="/" exact>
          <h2>Home</h2>
        </Route>

        <Route path="/store" exact>
          <Store />
        </Route>

        <Route path="/store/cart" exact>
          <Cart />
        </Route>

        <Route path="/example" exact>
          <Example />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>
        {/* </MainLayout> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
