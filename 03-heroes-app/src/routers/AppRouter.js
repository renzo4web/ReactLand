import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { useAuthContext } from '../auth/AuthContext';

import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
  const [{ logged }] = useAuthContext();

  return (
    <Router>
      <Switch>
        <PublicRoute
          isAuthenticated={logged}
          path="/login"
          exact
          component={LoginScreen}
        />

        <PrivateRoute
          isAuthenticated={logged}
          component={DashboardRoutes}
          path="/"
        />
      </Switch>
    </Router>
  );
};
