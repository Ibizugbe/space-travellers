import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <header>
    <nav>
      <ul className="nav-list">
        <li className="brand">Space Travellers Hub</li>
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
