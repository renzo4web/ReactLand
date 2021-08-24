import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import BugScreen from '../components/bugTracker/views/BugScreen';
import BugsScreen from '../components/bugTracker/views/Bug/BugsScreen';
import BugTrackerScreen from '../components/bugTracker/views/Dashboard/BugTrackerScreen';
import SubmitBugScreen from '../components/bugTracker/views/SubmitBugScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth';
import Loader from 'react-loader-spinner';

const AppRouter = () => {
    const dispatch = useDispatch();
    const { uid } = useSelector((state) => state.auth);

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking]);

    if (checking) {
        return (
            <div className='loader__container'>
                <Loader
                    type='Puff'
                    color='#F5734E'
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </div>
        );
    }

    return (
        <Router>
            <Switch>
                <Route path='/auth' component={AuthRouter} />

                {/* TODO : PRivate Route and Public Routes */}

                <Route exact path='/' component={BugTrackerScreen} />
                <Route exact path='/submit' component={SubmitBugScreen} />
                <Route exact path='/bugs' component={BugsScreen} />
                <Route exact path='/bug/:bugId' component={BugScreen} />

                <Redirect to='/auth/login' />
            </Switch>
        </Router>
    );
};

export default AppRouter;
