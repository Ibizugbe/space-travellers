import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="brand">Space Travellers' Hub</li>
          <li className="nav-links">
            <Link to="/" className="nav-link">
              Rockets
            </Link>
            <Link to="/components/pages/Mission" className="nav-link">
              Missions
            </Link>
            <Link to="/components/pages/Profile" className="nav-link">
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
