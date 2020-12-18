import './App.css';
import { Bestsellers } from './components/Bestsellers/Bestsellers.jsx';
import { Promo } from './components/promo/Promo.jsx';
import { Categories } from './components/Categories/Categories.jsx';
// import { Catalog } from './components/Catalog/Catalog';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Products } from './components/Products/Products';
import { ProductDetail } from './components/product-detail/ProductDetail';



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
      <ProductDetail />
      </Router>
    </div>
  );
}

export default App;
