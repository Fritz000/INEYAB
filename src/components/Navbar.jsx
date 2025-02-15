import React from 'react';
import cover from "../assets/cover.png";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="hero-container" style={{
      backgroundImage: `url(${cover})`, // ✅ Fix: Backticks and string format
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
  }}>
        <nav className="navbar">
            <img src={logo} alt="LOGO" />
                <ul>
                    <li className="active">Home</li>
                    <li>Services</li>
                    <li>Our Charges</li>
                    <li>Contact Us</li>
            </ul>
            <button>Talk to us</button>
        </nav>
    </div>
  );
};

export default Navbar;