import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Firebase
import { firebase } from "./firebase/firebase.config";

//Views
import Login from "./Pages/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";

//Layout
import Header from "./Components/Custom/Header";
import Profile from "./Pages/Profile/Profile";
import Videos from "./Pages/Videos/Videos";
import Images from "./Pages/Images/Images";

//Actions
import { handleFillUserInfoAction } from "./redux/actions/login.action";

function App() {
  //State
  const [isInSession, setIsInSession] = useState(false);

  //Redux Hooks
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged(user => {
    if (user?.uid) {
      dispatch(
        handleFillUserInfoAction({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        })
      );
      setIsInSession(true);
    } else {
      setIsInSession(false);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        {/* <MainLayout> */}
        <Route
          exact
          path="/"
          render={() =>
            isInSession ? (
              <>
                <Header />
                <Home />
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          exact
          path="/login"
          render={() =>
            !isInSession ? (
              <>
                <Login />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />

        <Route
          exact
          path="/signup"
          render={() =>
            !isInSession ? (
              <>
                <Register />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />

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
