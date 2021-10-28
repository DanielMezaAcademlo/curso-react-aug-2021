import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Vistas
import Home from "./views/Home";
import About from "./views/About";
import SingleHeroe from "./views/SingleHeroe";

//Styles
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/heroe/:id/:name" exact>
          <SingleHeroe />
        </Route>

        <Route path="*">
          <h2>Not Found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
