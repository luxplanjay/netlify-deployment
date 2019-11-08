import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="Navbar">
    <ul className="Nav">
      <li>
        <NavLink
          to="/"
          exact
          className="Nav__link"
          activeClassName="Nav__link--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className="Nav__link"
          activeClassName="Nav__link--active"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="Nav__link"
          activeClassName="Nav__link--active"
        >
          Profile
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Navbar;
