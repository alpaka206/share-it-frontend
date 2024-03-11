// Sidebar.js

import React from "react";
import "../css/Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      {/* sidebar 내용 */}
    </div>
  );
}

export default Sidebar;
