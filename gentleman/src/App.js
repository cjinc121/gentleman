import "./App.css";
import Mockman from "mockman-js";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage.jsx";
import { Product } from "./pages/product/Product.jsx";
import { Cart } from "./pages/cartpage/cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
