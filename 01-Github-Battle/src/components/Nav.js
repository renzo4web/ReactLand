import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }
  render() {
    return (
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <nav>
            <ul>
              <li>
                <Link to="/battle">Battle</Link>
              </li>
              <li>
                <Link to="/">Popular</Link>
              </li>
            </ul>
            <button onClick={toggleTheme}>
              {theme === "light" ? "🔦" : "💡"}
            </button>
          </nav>
        )}
      </ThemeConsumer>
    );
  }
}
