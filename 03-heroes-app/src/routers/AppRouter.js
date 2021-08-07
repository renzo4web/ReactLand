import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route path="/">
          <DashboardRoutes />
        </Route>
      </Switch>
    </Router>
  );
};
