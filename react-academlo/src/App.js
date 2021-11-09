import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Pages/Home/Home";
import WeatherInformation from "./Pages/WeatherInformation/WeatherInformation";
import Pokemon from "./Pages/Pokemon/Pokemon";
import Counter from "./Pages/Counter/Counter";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/pokemon" exact>
          <Pokemon />
        </Route>

        <Route path="/counter" exact>
          <Counter />
        </Route>

        <Route path="/weather/:name" exact>
          <WeatherInformation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
