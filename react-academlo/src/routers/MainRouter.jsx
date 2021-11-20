import React from "react";
//Router
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
