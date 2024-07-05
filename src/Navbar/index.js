import React, { useState } from 'react';
import './index.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <div className="navbar">
        <div className="nav">
          <img src="/Image/logo2.png" alt="Logo" id="logo" />
          <p id='logobrand'><b>EconTrust</b></p>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-container ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;