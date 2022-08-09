import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
