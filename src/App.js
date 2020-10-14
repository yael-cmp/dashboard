import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hemlow">
          adios
        </Route>
        <Route> 404</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
