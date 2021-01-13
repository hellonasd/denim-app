import "./App.css";
import { Bestsellers } from "./components/Bestsellers/Bestsellers.jsx";
import { Promo } from "./components/promo/Promo.jsx";
import { Categories } from "./components/Categories/Categories.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Gallery } from "./components/Gallery/Gallery";
import { Catalog } from "./components/Catalog/Catalog";
import { Filters } from "./components/Filter/Filters";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Bestsellers titleName="Bestsellers" />
            <Promo />
          </Route>
          <Route exact path="/product/:number" component={Gallery} />
        </Switch>
        <Route exact path="/product/:number">
          <Bestsellers titleName="You may also like" />
        </Route>
        <Categories />
        <Catalog /> 
        {/* <Filters />  */}
      </Router>
    </div>
  );
}

export default App;
