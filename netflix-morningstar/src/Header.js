import React from 'react';
import './css/Header.css'; // import the Footer CSS file
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <nav className="header__nav">
        <ul>
          <li>Browse</li>
          <li>My List</li>
          <li>Top Picks</li>
          <li>Recent</li>
        </ul>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Header;
