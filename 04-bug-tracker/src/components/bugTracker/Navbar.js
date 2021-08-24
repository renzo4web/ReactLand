import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <NavLink className="navbar__item" to="/">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink clasname="navbar__item" to="/bugs">
              Bugs
            </NavLink>
          </li>
        </ul>

        <div className="navbar__list">
          <button className="ui__btn-logout">Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
