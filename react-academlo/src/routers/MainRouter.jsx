import React, { useContext } from "react";
//Router
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";

//Layouts
import MainLayout from "../layouts/MainLayout";

//Context
import UserContext from "../context/UserContext";

const MainRouter = () => {
  const { state } = useContext(UserContext);

  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (state.user ? <Home /> : <Redirect to="/login" />)}
          />

          <Route
            path="/profile"
            exact
            render={() => (state.user ? <Profile /> : <Redirect to="/login" />)}
          />

          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainRouter;
