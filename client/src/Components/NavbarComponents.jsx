import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li> 
        <li>
          <Link to="/features">Features</Link>

        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/counter" style={{backgroundColor: "#007bff", color: "white", padding: "5px 10px", borderRadius: "5px"}}>Counter</Link>
        </li>
        <li>
          <Link to="/todo" style={{backgroundColor: "#007bff", color: "white", padding: "5px 10px", borderRadius: "5px"}}>ToDo</Link>
        </li>
      </ul>

      <div className="navbar-actions">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
