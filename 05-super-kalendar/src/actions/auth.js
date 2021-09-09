import { types } from '../types/types';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import toast from 'react-hot-toast';
import { eventsCleanAll } from './events';

export const startLogin = (email, password) => {
	return async dispatch => {
		// http://localhost:4000/api/auth
		const response = await fetchWithoutToken(
			'auth',
			{ email, password },
			'POST'
		);
		const body = await response.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			// keep track initial date of the token created
			localStorage.setItem('token-init-date', new Date().getTime());

			const { uid, name } = body;

			dispatch(
				login({
					uid,
					name,
				})
			);
		} else {
			toast.error(body.msg);
		}
	};
};

export const startRegister = (name, email, password) => {
	return async dispatch => {
		const response = await fetchWithoutToken(
			'auth/new',
			{ email, password, name },
			'POST'
		);

		const body = await response.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			// keep track initial date of the token created
			localStorage.setItem('token-init-date', new Date().getTime());

			const { uid, name } = body;

			dispatch(
				login({
					uid,
					name,
				})
			);
		} else {
			toast.error(body.msg);
		}
	};
};

export const startChecking = () => {
	return async dispatch => {
		const response = await fetchWithToken('auth/renew');
		const body = await response.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			// keep track initial date of the token created
			localStorage.setItem('token-init-date', new Date().getTime());

			const { uid, name } = body;

			dispatch(
				login({
					uid,
					name,
				})
			);
		} else {
			dispatch(checkingFinish());
		}
	};
};

const checkingFinish = () => ({
	type: types.authCheckingFinish,
});

export const startLogout = () => {
	return dispatch => {
		localStorage.clear();
		dispatch(logout());
		dispatch(eventsCleanAll());
	};
};

const logout = () => ({
	type: types.authLogout,
});

const login = user => ({
	type: types.authLogin,
	payload: user,
});
