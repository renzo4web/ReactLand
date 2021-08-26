import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { db, firebase } from '../firebase/firebase-config';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth';
import Loader from 'react-loader-spinner';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import DashboardRoutes from './DashboardRoutes';
import { startLoadingBugs } from '../actions/bugs';

const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingBugs());
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });

        db.collection('bugs').onSnapshot((snap) => {
            dispatch(startLoadingBugs());
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

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
                <PublicRoute
                    isLoggedIn={isLoggedIn}
                    component={AuthRouter}
                    path='/auth'
                />

                <PrivateRoute
                    path='/'
                    isLoggedIn={isLoggedIn}
                    component={DashboardRoutes}
                />

                <Redirect to='/auth/login' />
            </Switch>
        </Router>
    );
};

export default AppRouter;
