import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";

//Layouts
import MainLayout from "./layouts/MainLayout";

//Context
import { TeamProvider } from "./context/TeamContext";

function App() {
  //JSX

  return (
    <TeamProvider>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/team" exact>
              <Team />
            </Route>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </TeamProvider>
  );
}

export default App;

//Props, state, hooks
