import "./App.css";
import Mockman from "mockman-js";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage.jsx";
import { Product } from "./pages/product/Product.jsx";
import { Cart } from "./pages/cartpage/cart";
import { Wishlist } from "./pages/wishlistpage/wishlist";
import { Login } from "./pages/authentication/loginpage.jsx";
import { SignUp } from "./pages/authentication/signuppage";
import { PrivateRoute } from "./Routes/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route
          path="/cart"
          element={<PrivateRoute navigateTo={<Cart />}></PrivateRoute>}
        />
        <Route
          path="/wishlist"
          element={<PrivateRoute navigateTo={<Wishlist />}></PrivateRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;
