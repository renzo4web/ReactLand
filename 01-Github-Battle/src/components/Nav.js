import React from "react";
import { ThemeConsumer } from "../contexts/theme";

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
            <button onClick={toggleTheme}>{theme}</button>
          </nav>
        )}
      </ThemeConsumer>
    );
  }
}
