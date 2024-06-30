import React, { useState } from 'react';
import './index.css';

function Homepage() {
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
          <li><a href="#"><b>Home</b></a></li>
          <li><a href="#"> <b>About Us</b></a></li>
          <li><a href="#"><b>Services</b></a></li>
          <li><a href="#"><b>Team</b></a></li>
          <li><a href="#"><b>Contact Us</b></a></li>
        </ul>
      </div>
      <div className="Text">
        <div>
          <p id='paragraph'>Let some elegance<br/>Into your finance</p>
          <p className="paragraph">
            Simplify your financial journey with us
            <br/>
            <br/>
            Join us today and experience hassle free saving
          </p>
        </div>
        <div>
        <img src="/Image/WOMEN-CHAMA.jpg" alt="Chama" id='chama' />
      </div>
      </div>
      <button id="learnmore"><b>Learn more</b></button>
      <br />
      <div className='icons'>
      <img  src="/Image/iconss.png" alt="icons" id="icons" /></div>
    </div>
  );
}

export default Homepage;