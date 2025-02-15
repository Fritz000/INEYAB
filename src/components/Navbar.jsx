import React from 'react';
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="LOGO" />
      <ul>
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/OurCharges">Our Charges</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
      <Link to="/Contact" className="nav-button">Talk to us</Link>
    </nav>
  );
};

export default Navbar;
