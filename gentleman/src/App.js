import "./App.css";
import Mockman from "mockman-js";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
