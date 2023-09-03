import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import Product from "./routes/Products";
import {ShoppingCart} from "./routes/ShoppingCart";
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/carts" element={<ShoppingCart/>}/>
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
