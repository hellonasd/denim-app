import './App.css';
import { Bestsellers } from './components/Bestsellers/Bestsellers.jsx';
import { Promo } from './components/promo/Promo.jsx';
import { Categories } from './components/Categories/Categories.jsx';
import { Catalog } from './components/Catalog/Catalog';



function App() {
  return (
    <div className="App">
      <Bestsellers />
      <Promo />
      <Categories />
      <Catalog />
    </div>
  );
}

export default App;
