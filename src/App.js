import './App.css';
import { Bestsellers } from './components/bestsellers/Bestsellers.jsx';
import { Promo } from './components/promo/Promo.jsx';



function App() {
  return (
    <div className="App">
      <Bestsellers />
      <Promo />
    </div>
  );
}

export default App;
