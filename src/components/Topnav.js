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
    <div className="header">
      <div className="left-header">
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
      <div className="right-header">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
}

export default Topnav;
