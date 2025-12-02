import React from "react";
import { Link } from "react-router-dom";
import './css/Navbar.css'; // Custom CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
  <Link to="/" className="logo-main">Mahadeva</Link>
  <div className="logo-sub">Tours and Travels</div>
</div>

      <ul className="navbar-links" styles={{flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-login">
      </div>
    </nav>
  );
};

export default Navbar;
