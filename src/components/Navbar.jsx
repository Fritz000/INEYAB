import React from 'react';
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <nav className="navbar">
      <img src={logo} alt="LOGO" />
      <ul>
        <li className={active === "home" ? "active" : ""}
          onClick={() => setActive("home")}> <ul><Link to="/">Home</Link></ul> </li>
        <li className={active === "services" ? "active" : ""}
        onClick={() => setActive("services")}> <ul><Link to="/Services">Services</Link></ul> </li>
        <li className={active === "ourcharges" ? "active" : ""}
          onClick={() => setActive("ourcharges")}> <ul><Link to="/OurCharges">Our Charges</Link></ul> </li>
        <li className={active === "contact" ? "active" : ""}
        onClick={() => setActive("contact")}> <ul><Link to="/Contact">Contact</Link></ul> </li>
      </ul>
      <Link to="/Contact" className="nav-button">Talk to us</Link>

    </nav>
  );
};

export default Navbar;
