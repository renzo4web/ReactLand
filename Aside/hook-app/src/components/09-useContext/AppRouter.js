import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/home">
            <HomeScreen />
          </Route>

          <Route path="/about">
            <AboutScreen />
          </Route>

          <Route exact path="/login">
            <LoginScreen />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
