import './App.css';
import { Bestsellers } from './components/Bestsellers/Bestsellers';
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
