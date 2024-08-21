// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import MapDropdown from './MapDropdown';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Rent-Anywhere</h1>
        <nav className="header-nav">
              <MapDropdown/>
              <NavLink to="/profile" className="header-profile">
              <FontAwesomeIcon icon={faUser} />
               <span style={{ paddingRight: '15px' }}></span>
              </NavLink>

        </nav>
      </div>
    </header>
  );
};

export default Header;
