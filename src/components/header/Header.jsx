// Header.jsx

import React, { useState } from "react";
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
                <a href="#">Add Word</a>
              </li>
              <li>
                <a href="#">Random</a>
              </li>
              <li>
                <a href="#">All</a>
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
              <button>Add Word</button>
              <button>Random</button>
              <button>All</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
