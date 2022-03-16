import "./App.css";
import Mockman from "mockman-js";
import { Navbar } from "./components/navbar/Navbar.jsx";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      {/* <Mockman /> */}
      <Navbar />
    </div>
  );
}

export default App;
