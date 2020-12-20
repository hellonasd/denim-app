import "./App.css";
import { Bestsellers } from "./components/Bestsellers/Bestsellers.jsx";
import { Promo } from "./components/promo/Promo.jsx";
import { Categories } from "./components/Categories/Categories.jsx";
// import { Catalog } from './components/Catalog/Catalog';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import { ProductDetail } from "./components/product-detail/ProductDetail";
import { Gallery } from "./components/Gallery/Gallery";
import { Filters } from "./components/Filter/Filters";

function App() {
  return (
    <div className="App">
      <Router>
        <Bestsellers />
        <Promo />
        <Categories />
        {
          // <Catalog /> - для данной страницы необходимо делать роутинг
        }
        <Gallery />
        <Filters />
      </Router>
    </div>
  );
}

export default App;
