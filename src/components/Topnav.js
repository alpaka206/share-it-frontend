// Topnav.js

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/Topnav.css";

function Topnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="header">
        <img
          src="../assets/menu.svg"
          onClick={toggleMenu}
          alt="menu"
          className="menu-icon"
        />
        <div className="logo-container">
          <img
            src={process.env.PUBLIC_URL + `assets/logo.svg`}
            alt="logo"
            className="logo"
          />
        </div>
      </div>
      <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default Topnav;
