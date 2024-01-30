// Header.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className={`menu ${showMenu ? "active" : ""}`}>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/card">Card</Link>
              </li>
              <li>
                <Link to="/random">Random</Link>
              </li>
              <li>
                <Link to="/word-list">Word List</Link>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${showMenu ? "active" : ""}`}></div>
            <div className={`line ${showMenu ? "active" : ""}`}></div>
            <div className={`line ${showMenu ? "active" : ""}`}></div>
          </div>
          {showMenu && (
            <div className="dropdown">
              <Link to="/card">Card</Link>
              <Link to="/random">Random</Link>
              <Link to="/word-list">Word List</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
