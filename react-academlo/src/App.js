import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Pages/Home/Home";
import Followers from "./Pages/Followers/Followers";

//Layout
import MainLayout from "./Layouts/MainLayout";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/followers/:user" exact>
            <Followers />
          </Route>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
