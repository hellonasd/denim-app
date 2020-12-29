import "./App.css";
import { Bestsellers } from "./components/Bestsellers/Bestsellers.jsx";
import { Promo } from "./components/promo/Promo.jsx";
import { Categories } from "./components/Categories/Categories.jsx";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { Gallery } from "./components/Gallery/Gallery";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Bestsellers />
          </Route>
          <Route path="/product/:number">
            <Gallery />
          </Route>
        </Switch>
        <Promo />
        <Categories />
      </Router>
    </div>
  );
}

export default App;
