import "./App.css";
import { Bestsellers } from "./components/Bestsellers/Bestsellers.jsx";
import { Promo } from "./components/promo/Promo.jsx";
import { Categories } from "./components/Categories/Categories.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Gallery } from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Bestsellers titleName="Bestsellers" />
          </Route>
          <Route exact path="/product/:number" component={Gallery} />
        </Switch>
        <Route exact path="/product/:number">
          <Bestsellers titleName="You may also like" />
        </Route>
        <Promo />
        <Categories />
      </Router>
    </div>
  );
}

export default App;
