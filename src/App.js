import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductList from "./screens/ProductList";
import ShoppingCart from "./screens/ShoppingCart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><ProductList /></Route>
        <Route exact path="/carro"><ShoppingCart /></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
