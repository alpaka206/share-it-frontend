// Sidebar.js

import React from "react";
import "../css/Sidebar.css";
import PublicSideMenu from "./PublicSideMenu";

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <PublicSideMenu
        Menu_Text="알림"
        Menu_Image={`assets/alert.svg`}
      ></PublicSideMenu>
      <PublicSideMenu
        Menu_Text="알림"
        Menu_Image={`assets/alert.svg`}
      ></PublicSideMenu>
      <PublicSideMenu
        Menu_Text="알림"
        Menu_Image={`assets/alert.svg`}
      ></PublicSideMenu>
      <PublicSideMenu
        Menu_Text="알림"
        Menu_Image={`assets/alert.svg`}
      ></PublicSideMenu>
      <PublicSideMenu
        Menu_Text="알림"
        Menu_Image={`assets/alert.svg`}
      ></PublicSideMenu>
    </div>
  );
}

export default Sidebar;
