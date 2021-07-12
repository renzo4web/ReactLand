import React, { Component } from "react";

import Battle from "./components/Battle";
import Nav from "./components/Nav"
import Popular from "./components/Popular";
import { ThemeProvider } from "./contexts/theme";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>

        <div className="container">
          {/* <Popular /> */}
          <Nav />
          <Popular />
        </div>
        </div>
      </ThemeProvider>
    );
  }
}
