import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { startChecking } from '../actions/auth';

import LoginScreen from '../components/auth/LoginScreen';
import Loading from '../components/ui/Loading';
import CalendarScreen from '../components/calendar/CalendarScreen';
import CalendarLangContext from '../contexts/CalendarLangContext';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
	const dispatch = useDispatch();
	const { checking, uid } = useSelector(state => state.auth);

	useEffect(() => {
		dispatch(startChecking());
	}, [dispatch]);

	if (checking) {
		return <Loading />;
	}

	return (
		<Router>
			<Switch>
				<PublicRoute
					exact
					path="/login"
					isAuthenticated={Boolean(uid)}
					component={LoginScreen}
				/>

				<CalendarLangContext>
					<PrivateRoute
						exact
						path="/"
						isAuthenticated={Boolean(uid)}
						component={CalendarScreen}
					/>
				</CalendarLangContext>
			</Switch>
		</Router>
	);
};

export default AppRouter;
