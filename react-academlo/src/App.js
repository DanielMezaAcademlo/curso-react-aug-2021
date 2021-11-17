import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
//Vistas
import Home from "./views/Home";
import Movies from "./views/Movies";
//Styles
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/movies" exact>
            <Movies />
          </Route>
        </Switch>
      </MovieProvider>
    </BrowserRouter>
  );
};

export default App;
