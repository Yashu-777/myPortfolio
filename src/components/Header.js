import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">YASWANTH</div>
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#About" onClick={closeMenu}>About</a></li>
          <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
