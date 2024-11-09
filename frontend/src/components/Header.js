import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ type }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  useEffect(() => {
    if (type === 'show') {
      setIsScrolled(true);
    } else if (type === 'no') {
      setIsScrolled(false);
    }
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (type !== 'show') {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [type]);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <Link to="/" className="brand">
        <div className="brand">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="logo"
          />
          <h1>
            Elephant <span id="brand1">Discovery</span> <span id="brand2">Chiang Mai</span>
          </h1>
        </div>
      </Link>

      <input type="checkbox" id="check" checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <Link to="/" className="nav-item" style={{ "--i": 0 }} onClick={closeMenu}>Home</Link>
        <Link to="/about" className="nav-item" style={{ "--i": 1 }} onClick={closeMenu}>About</Link>
        <Link to="/service" className="nav-item" style={{ "--i": 2 }} onClick={closeMenu}>Service</Link>
        <Link to="/book" className="nav-item" style={{ "--i": 3 }} onClick={closeMenu}>Book</Link>
        <Link to="/gallery" className="nav-item" style={{ "--i": 4 }} onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" className="nav-item" style={{ "--i": 5 }} onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;