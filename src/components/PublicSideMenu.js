import React from "react";
import "../css/PublicSideMenu.css";

function PublicSideMenu({ Menu_Text, Menu_Image }) {
  return (
    <div className="PublicSideMenu">
      <img src={process.env.PUBLIC_URL + Menu_Image} alt="MenuImage" />
      <div>{Menu_Text}</div>
    </div>
  );
}

export default PublicSideMenu;
