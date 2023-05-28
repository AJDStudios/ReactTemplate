import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CustomLink({ to, children }) {
    return <Link to={to}>{children}</Link>;
}

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
  
    let theMenu;
    let menuMask;
  
    if (showMenu) {
      theMenu = (
        <div className="menu">
          <ul className="nav-links">
            <CustomLink to="/content">Content</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/OtherContent">OtherContent</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>
          </ul>
        </div>
      );
  
      menuMask = (
        <div
          className="menumask"
          onClick={() => setShowMenu(false)}
        ></div>
      );
    }
  
    return (
      <nav className="nav">
        <span
          className="burger"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </span>
  
        {menuMask}
  
        {theMenu}
      </nav>
    );
  }
  
  export { CustomLink, Navigation };

  