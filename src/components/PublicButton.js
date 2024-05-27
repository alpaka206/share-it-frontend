import React from "react";
import { useLocation } from "react-router-dom";
import "../css/PublicButton.css";

function PublicButton({
  Button_Text,
  Button_Image,
  onClick,
  targetUrl,
  minWidth,
}) {
  const location = useLocation();
  const isActive = location.pathname === targetUrl;

  return (
    <button
      type="button"
      className={`PublicButton ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img
        src={process.env.PUBLIC_URL + Button_Image}
        alt="ButtonImage"
        style={{ "min-width": minWidth }}
      />
      <div>{Button_Text}</div>
    </button>
  );
}

export default PublicButton;
