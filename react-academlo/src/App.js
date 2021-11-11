import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";

//Layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  //JSX

  return (
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route>
            <Home />
          </Route>

          <Route>
            <Team />
          </Route>
        </Switch>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;

//Props, state, hooks
