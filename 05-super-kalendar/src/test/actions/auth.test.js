import toast from 'react-hot-toast';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startChecking, startLogin, startRegister } from '../../actions/auth';
import * as fetchModule from '../../helpers/fetch';
import { types } from '../../types/types';

jest.mock('react-hot-toast', () => ({
	error: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

describe('Test actions/auth', () => {
	beforeEach(() => {
		store = mockStore(initState);
		jest.clearAllMocks();
	});

	test('startLogin should work with correct user information', async () => {
		await store.dispatch(startLogin('renzo@gmail.com', '123456'));

		const actions = store.getActions();

		expect(actions[0]).toStrictEqual({
			type: types.authLogin,
			payload: {
				uid: expect.any(String),
				name: expect.any(String),
			},
		});

		expect(localStorage.setItem).toBeCalledWith(
			'token',
			expect.any(String)
		);

		expect(localStorage.setItem).toBeCalledWith(
			'token-init-date',
			expect.any(Number)
		);
		// // get the arguments
		// token = localStorage.setItem.mock.calls[0][1]
	});

	test('startlogin should NOT work with incorrect user information', async () => {
		await store.dispatch(startLogin('renzo@gmail.com', 'INCORRECTO'));

		const actions = store.getActions();

		expect(actions.length).toBe(0);
		expect(toast.error).toHaveBeenCalled();
	});

	test('startRegister should work', async () => {
		// use mock to not populate db with testing info
		const fakeJsonReturn = {
			ok: true,
			uid: '12312245',
			name: 'Max',
			token: '2193912j32jh1',
		};

		fetchModule.fetchWithoutToken = jest.fn(() => ({
			json() {
				return {
					...fakeJsonReturn,
				};
			},
		}));

		await store.dispatch(
			startRegister('test3', 'testinggg@gmail.com', '123456')
		);
		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.authLogin,
			payload: {
				uid: fakeJsonReturn.uid,
				name: fakeJsonReturn.name,
			},
		});

		expect(localStorage.setItem).toBeCalledWith(
			'token',
			fakeJsonReturn.token
		);

		expect(localStorage.setItem).toBeCalledWith(
			'token-init-date',
			expect.any(Number)
		);
	});

	test('startChecking should work properly', async () => {
		// use mock to not populate db with testing info
		const fakeJsonReturn = {
			ok: true,
			uid: '12312245',
			name: 'Max',
			token: '2193912j32jh1',
		};

		fetchModule.fetchWithToken = jest.fn(() => ({
			json() {
				return {
					...fakeJsonReturn,
				};
			},
		}));

		await store.dispatch(startChecking());

		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.authLogin,
			payload: {
				uid: fakeJsonReturn.uid,
				name: fakeJsonReturn.name,
			},
		});

		expect(localStorage.setItem).toBeCalledWith(
			'token',
			fakeJsonReturn.token
		);

		expect(localStorage.setItem).toBeCalledWith(
			'token-init-date',
			expect.any(Number)
		);
	});
});
