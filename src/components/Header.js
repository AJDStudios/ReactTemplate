import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navigation } from './Nav.js';
import DeskNavbar from "./DeskNav.js";
import logo from "../logo.webp";
import '../styles/Header.css';
import { FaCog } from 'react-icons/fa';


function Header() {
  const [showSettings, setShowSettings] = useState(false);

function handleSettingsToggle() {
  setShowSettings(!showSettings);
}

  return (
    <header className="header">
        <div className="container">
            <Link to="/" className="site-logo">
                <img src={logo} alt="Logo" />
                <p className="logo-text">An AJDStudios production</p>
            </Link>
            

            <Navigation />

            <DeskNavbar />

            <div className="settings">
              <FaCog className="settings-icon" onClick={handleSettingsToggle} />
              {showSettings && (
                <div className="settings-dropdown">
                  <ul>
                    <li>Theme: Light/Dark</li>
                    <li>Language: English</li>
                    <li>Language: French</li>
                    <li>Language: German</li>
                    <li>Language: Spanish</li>
                    <li>Language: Czech</li>
                    <li>Language: Russian</li>
                    <li>Language: Welsh</li>
                    <li>Language: Latin</li>
                  </ul>
                </div>
              )}
            </div>
        </div>            
    </header>
  );
}

export default Header;
