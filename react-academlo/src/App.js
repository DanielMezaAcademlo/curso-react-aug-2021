import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

//Components
import Header from "./componentes/Header";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  //JSX
  // const [menu, setMenu] = useState(["item 1", "item 2", "Agregar"]);
  //const [counter, setCounter] = useState(0);
  // const [persona, setPersona] = useState("");
  // const [name, setName] = useState("");
  //Funciones
  // const handleAddCounter = () => setCounter(counter + 1);
  // const handleName = name => setPersona("Laura");
  // const handleFillName = ({ value }) => setName(value);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/user/:name/:id" exact>
          <User />
        </Route>
      </Switch>
    </BrowserRouter>

    // <div className="App">
    //   <Header
    //     menu={menu}
    //     handleName={handleName}
    //     handleFillName={handleFillName}
    //   />
    //   <p>Hola {name} !</p>
    //   <p>Hola {persona} !</p>
    // </div>
  );
}

export default App;
