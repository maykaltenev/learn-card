import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
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
      </nav>
    </header>
  );
};

export default Header;
