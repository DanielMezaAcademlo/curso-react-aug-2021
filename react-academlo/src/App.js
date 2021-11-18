import React, { useContext } from "react";
import "./App.css";
//Router
import MainRouter from "./routers/MainRouter";

//Context
import { UserProvider } from "./context/UserContext";
import { PostsProvider } from "./context/PostsContext";

function App() {
  return (
    <UserProvider>
      <PostsProvider>
        <MainRouter />
      </PostsProvider>
    </UserProvider>
  );
}

export default App;
