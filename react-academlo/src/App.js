import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./pages/Home/Home";
import Followers from "./pages/Followers/Followers";
import Store from "./pages/Store/Store";
import Cart from "./pages/Cart/Cart";

//Layout
import MainLayout from "./Layouts/MainLayout";

//Context
import { DarkModeProvider } from "./Context/DarkModeContext";
import { StoreProvider } from "./Context/StoreContext";

function App() {
  //JSX

  return (
    <DarkModeProvider>
      <StoreProvider>
        <BrowserRouter>
          <Switch>
            <MainLayout>
              <Route path="/" exact>
                <h2>Home</h2>
              </Route>

              <Route path="/store" exact>
                <Store />
              </Route>

              <Route path="/store/cart" exact>
                <Cart />
              </Route>
            </MainLayout>
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </DarkModeProvider>
  );
}

export default App;

//Props, state, hooks
