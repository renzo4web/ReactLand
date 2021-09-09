import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { calendarReducer } from './calendarReducer';

export const rootReducers = combineReducers({
	calendar: calendarReducer,
	auth: authReducer,
});
