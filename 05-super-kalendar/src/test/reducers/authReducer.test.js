import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Test reducers/authReducer', () => {
	test('should return initial state', () => {
		const state = authReducer({ checking: true }, {});

		expect(state).toEqual({
			checking: true,
		});
	});

	test('should authenticate the user', () => {
		const state = authReducer(
			{ checking: true },
			{
				type: types.authLogin,
				payload: {
					uid: '1111',
					name: 'test',
				},
			}
		);

		expect(state).toEqual({
			checking: false,
			uid: '1111',
			name: 'test',
		});
	});

	test('should return { checking : false }', () => {
		const state = authReducer(
			{ checking: true },
			{
				type: types.authLogout,
			}
		);

		expect(state).toEqual({
			checking: false,
		});
	});
});
