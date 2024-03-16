//PubicSideMenu.js

import React from 'react';
import '../css/PublicSideMenu.css';

function PublicSideMenu({ Menu_Text, Menu_Link, Menu_Image, isActive, onClick }) {
    return (
        <div className={`PublicSideMenu ${isActive ? 'active' : ''}`}>
            <a href={Menu_Link} className="menu-link" onClick={onClick}>
                <img src={process.env.PUBLIC_URL + Menu_Image} alt="MenuImage" className="menu-image" />
                <span className="menu-text">{Menu_Text}</span>
            </a>
        </div>
    );
}

export default PublicSideMenu;
