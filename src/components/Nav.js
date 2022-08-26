import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import planet from "./assets/planet.png";

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
              <NavLink to="/" className="nav-link">
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink to="/components/pages/Mission" className="nav-link">
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink to="/components/pages/Profile" className="nav-link">
                My Profile
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
