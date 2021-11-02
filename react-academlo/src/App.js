import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/pokemon/:id/:name" exact>
          <Pokemon />
        </Route>

        <Route path="*">
          <h4>404 Not Found</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
