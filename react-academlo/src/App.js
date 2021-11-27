import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
//Layout
import MainLayout from "./Layouts/MainLayout";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        {/* <MainLayout> */}
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/signup" exact>
          <Register />
        </Route>
        {/* </MainLayout> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
