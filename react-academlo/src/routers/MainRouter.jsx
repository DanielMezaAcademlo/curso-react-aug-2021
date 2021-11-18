import React, { useContext } from "react";
//Router
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

//Context
import UserContext from "../context/UserContext";

const MainRouter = () => {
  const { state } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (state.user ? <Home /> : <Redirect to="/login" />)}
        />

        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
