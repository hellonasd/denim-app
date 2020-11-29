import './App.css';
import { Bestsellers } from './components/Bestsellers/Bestsellers';
import { ProductCard } from './components/Product-card/Product-card';



function App() {
  return (
    <div className="App">
      <Bestsellers />
      <ProductCard isPrise={true}/>
      <ProductCard isPrise={false}/>
    </div>
  );
}

export default App;
