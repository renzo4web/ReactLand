import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import BugsScreen from "../components/bugTracker/BugsScreen";
import BugTrackerScreen from "../components/bugTracker/BugTrackerScreen";
import SubmitBugScreen from "../components/bugTracker/SubmitBugScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter} />

        <Route exact path="/" component={BugTrackerScreen} />
        <Route exact path="/submit" component={SubmitBugScreen} />
        <Route exact path="/bugs" component={BugsScreen} />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
