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
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Checkout } from "./pages/checkout/Checkout";
import { Profile } from "./pages/authentication/Profile";
import { useUserContext } from "./context/user-context";
import { AddressModal } from "../src/components/AddressModal/AddressModal.jsx";
function App() {
  const { userState } = useUserContext();
  const { showAddressModal } = userState;
  return (
    <div className="App">
      {showAddressModal && <AddressModal />}
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route
          path="/checkout"
          element={<PrivateRoute navigateTo={<Checkout />}></PrivateRoute>}
        />

        <Route
          path="/profile"
          element={<PrivateRoute navigateTo={<Profile />}></PrivateRoute>}
        />
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
