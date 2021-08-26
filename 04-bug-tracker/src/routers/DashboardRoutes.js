import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from '../components/bugTracker/Sidebar';
import BugScreen from '../components/bugTracker/views/BugScreen';
import BugTrackerScreen from '../components/bugTracker/views/Dashboard/BugTrackerScreen';
import SubmitBugScreen from '../components/bugTracker/views/SubmitBugScreen';

const DashboardRoutes = () => {
    return (
        <div className='flex-row main'>
            <Sidebar />
            <Switch>
                <Route exact path='/' component={BugTrackerScreen} />
                <Route exact path='/submit' component={SubmitBugScreen} />
                <Route exact path='/bug/:bugId' component={BugScreen} />
            </Switch>
        </div>
    );
};

export default DashboardRoutes;
