import React from "react";
import { Link } from 'react-router-dom';
import { Navigation } from './Nav.js';
import DeskNavbar from "./DeskNav.js";
import logo from "../logo.webp";


function Header() {
  return (
    <nav className="header">
      <Link to="/" className="site-logo">
        <img src={logo} alt="Logo" />
      </Link>
      

      <Navigation />

      <DeskNavbar />
    </nav>
  );
}

export default Header;
