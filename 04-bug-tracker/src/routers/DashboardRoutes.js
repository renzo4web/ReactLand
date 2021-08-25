import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BugScreen from '../components/bugTracker/views/BugScreen';
import BugTrackerScreen from '../components/bugTracker/views/Dashboard/BugTrackerScreen';
import SubmitBugScreen from '../components/bugTracker/views/SubmitBugScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={BugTrackerScreen} />
                <Route exact path='/submit' component={SubmitBugScreen} />
                <Route exact path='/bug/:bugId' component={BugScreen} />
            </Switch>
        </>
    );
};

export default DashboardRoutes;
