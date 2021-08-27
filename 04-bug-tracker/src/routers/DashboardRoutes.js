import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../firebase/firebase-config';
import { Switch, Route, Redirect } from 'react-router-dom';
import { startLoadingBugs } from '../actions/bugs';

import Sidebar from '../components/bugTracker/Sidebar';
import BugScreen from '../components/bugTracker/views/BugScreen';
import BugTrackerScreen from '../components/bugTracker/views/Dashboard/BugTrackerScreen';
import SubmitBugScreen from '../components/bugTracker/views/SubmitBugScreen';

const DashboardRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // if users is loggedIn fetch data from db
        db.collection('bugs').onSnapshot((snap) => {
            dispatch(startLoadingBugs());
        });
    }, [dispatch]);

    return (
        <div className='flex-row main'>
            <Sidebar />
            <Switch>
                <Route exact path='/' component={BugTrackerScreen} />
                <Route exact path='/submit' component={SubmitBugScreen} />
                <Route exact path='/bug/:id' component={BugScreen} />

                <Redirect to='/' />
            </Switch>
        </div>
    );
};

export default DashboardRoutes;
