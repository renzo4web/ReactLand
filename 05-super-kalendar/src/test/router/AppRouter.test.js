import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import AppRouter from '../../router/AppRouter';

// Configuration to test components that use REDUX
// jest.mock('../../../actions/auth', () => ({
// 	startChecking: jest.fn(),
// }));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// store.dispatch = jest.fn();

describe('Test router/AppRouter', () => {
	test('should render <Loading />', () => {
		const initState = {
			auth: {
				checking: true,
			},
		};
		const store = mockStore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);

		expect(wrapper.find('img').exists()).toBe(true);
	});

	test('should render PublicRoute', () => {
		const initState = {
			auth: {
				checking: false,
			},
		};
		const store = mockStore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);

		expect(wrapper.find('form').exists()).toBe(true);
	});

	test('should render PrivateRoute', () => {
		const initState = {
			auth: {
				checking: false,
				uid: '2222',
				name: 'test',
			},
			calendar: {
				events: [],
				activeEvent: null,
			},
		};
		const store = mockStore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);

		expect(wrapper.find('.rbc-toolbar-label').exists()).toBe(true);
	});
});
