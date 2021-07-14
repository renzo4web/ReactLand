import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { NavLink } from "react-router-dom";

import { nav, active, btnTheme } from "./Nav.module.css";

export default class Nav extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <nav className={nav}>
            <ul>
              <li>
                <NavLink exact activeClassName={active} to="/">
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={active} to="/battle">
                  Battle
                </NavLink>
              </li>
            </ul>
            <button className={btnTheme} onClick={toggleTheme}>
              {theme === "light" ? "🔦" : "💡"}
            </button>
          </nav>
        )}
      </ThemeConsumer>
    );
  }
}
