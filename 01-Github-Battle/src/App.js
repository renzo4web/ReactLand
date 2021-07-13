import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Battle from "./components/Battle";
import Nav from "./components/Nav";
import Popular from "./components/Popular";
import Results from"./components/Results"
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
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              {/* <Popular /> */}
              <Nav />
              <Route exact path="/" component={Popular} />
              <Route exact path="/battle" component={Battle} />
              <Route path="/battle/results" component={Results} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}
