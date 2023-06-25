import './App.css';
import {BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={""}>&#9776;</button>
          <Link to="/">ShopMart</Link>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
            <Link to="/signin">Sign In</Link>
            <div className="dropdown">
              <a href="#">Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={""}>
          x
        </button>
        <ul className="categories">
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>

          <li>
            <Link to="/category/Shirts">Shirts</Link>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
        </div>
      </main>
      <footer className="footer">All rights reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
