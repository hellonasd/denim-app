import './App.css';
import { Bestsellers } from './components/Bestsellers/Bestsellers';
import { Promo } from './components/promo/Promo.jsx';
import { Categories } from './components/Categories/Categories.jsx';



function App() {
  return (
    <div className="App">
      <Bestsellers />
      <Promo />
      <Categories />
    </div>
  );
}

export default App;
