import React, { Component } from "react";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";

import Nav from "./components/Nav";
import Loading from "./components/Loading";

const Popular = React.lazy(() => import("./components/Popular"));
const Battle = React.lazy(() => import("./components/Battle"));
const Results = React.lazy(() => import("./components/Results"));

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
              <Nav />
              <React.Suspense
                fallback={<Loading text="Please wait a moment" />}
              >
                <Switch>
                  <Route exact path="/" component={Popular} />
                  <Route exact path="/battle" component={Battle} />
                  <Route path="/battle/results" component={Results} />
                  <Route path="*">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}
