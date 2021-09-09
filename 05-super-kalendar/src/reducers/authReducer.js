import { types } from '../types/types';

const initialState = {
	checking: true,
	// uid:null,
	// name:null
};

export const authReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.authLogin:
			return { ...state, checking: false, ...payload };

		case types.authCheckingFinish:
			return { ...state, checking: false };

		case types.authLogout:
			return { checking: false };

		default:
			return state;
		// throw new Error(`The action.type ${type} is invalid`);
	}
};
