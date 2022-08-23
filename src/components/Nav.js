import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import planet from './assets/planet.png';

const Nav = () => (
  <header>
    <nav>
      <ul className="nav-list">
        <li className="brand">
          <img src={planet} alt="logo" className="brand-image" />
          <p>Space Travellers Hub</p>
        </li>
        <li>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Rockets
              </Link>
            </li>
            <li>
              <Link to="/components/pages/Mission" className="nav-link">
                Missions
              </Link>
            </li>
            <li>
              <Link to="/components/pages/Profile" className="nav-link">
                My Profile
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
