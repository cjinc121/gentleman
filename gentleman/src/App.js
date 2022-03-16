import "./App.css";
import Mockman from "mockman-js";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      {/* <Mockman /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
