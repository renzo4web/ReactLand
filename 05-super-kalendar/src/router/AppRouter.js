import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom';

import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import CalendarLangContext from "../contexts/CalendarLangContext";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={LoginScreen} />

                <CalendarLangContext>
                    <Route exact path='/' component={CalendarScreen} />
                </CalendarLangContext>

                <Redirect to='/' />
            </Switch>
        </Router>
    );
};

export default AppRouter;
