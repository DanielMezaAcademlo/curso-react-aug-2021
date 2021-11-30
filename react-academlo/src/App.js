import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
//Layout
import MainLayout from "./Layouts/MainLayout";
import Header from "./Components/Custom/Header/Header";
import Profile from "./Pages/Profile/Profile";
import Videos from "./Pages/Videos/Videos";
import Images from "./Pages/Images/Images";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        {/* <MainLayout> */}
        <Route path="/" exact>
          <>
            <Header />
            <Home />
          </>
        </Route>

        <Route path="/login" exact>
          <>
            <Login />
          </>
        </Route>

        <Route path="/signup" exact>
          <>
            <Register />
          </>
        </Route>

        <Route path="/images" exact>
          <>
            <Header />
            <Images />
          </>
        </Route>

        <Route path="/videos" exact>
          <>
            <Header />
            <Videos />
          </>
        </Route>

        <Route path="/profile" exact>
          <>
            <Header />
            <Profile />
          </>
        </Route>
        {/* </MainLayout> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
