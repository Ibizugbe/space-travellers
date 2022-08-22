import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="brand"></li>
          <li className="nav-links"></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
