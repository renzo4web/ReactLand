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
import { useStateApp } from "./UserContext";

const AppRouter = () => {
  const theme = useStateApp()[0];

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#000",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <Router>
      <div style={styles}>
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
