import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Track from "./pages/Track";
import Admin from "./pages/Admin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>FreshBulk</h2>
        <div>
          <Link to="/">Products</Link>
          <Link to="/order">Place Order</Link>
          <Link to="/track">Track</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/track" element={<Track />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
