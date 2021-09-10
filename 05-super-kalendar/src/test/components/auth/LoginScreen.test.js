import { mount } from 'enzyme';
import React from 'react';
import toast from 'react-hot-toast';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLogin, startRegister } from '../../../actions/auth';
import LoginScreen from '../../../components/auth/LoginScreen';

jest.mock('../../../actions/auth', () => ({
	startLogin: jest.fn(),
	startRegister: jest.fn(),
}));

jest.mock('react-hot-toast', () => ({
	error: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<LoginScreen />
	</Provider>
);

describe('Test components/auth/LoginScreen', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should render properly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should dispatch starLogin', () => {
		wrapper.find('form.bg-dark').simulate('submit', {
			preventDefault() {},
		});
		expect(startLogin).toHaveBeenCalled();
	});

	test('should not register if passwords not match', () => {
		wrapper.find('form.bg-white input[name="rName"]').simulate('change', {
			target: {
				name: 'rName',
				value: 'Test',
			},
		});

		wrapper.find('form.bg-white input[name="rEmail"]').simulate('change', {
			target: {
				name: 'rEmail',
				value: 'test@gmail.com',
			},
		});
		wrapper
			.find('form.bg-white input[name="rPassword1"]')
			.simulate('change', {
				target: {
					name: 'rPassword1',
					value: '11111',
				},
			});
		wrapper
			.find('form.bg-white input[name="rPassword2"]')
			.simulate('change', {
				target: {
					name: 'rPassword2',
					value: 'ZZZZ',
				},
			});

		// SUBMIT
		wrapper.find('form.bg-white').simulate('submit', {
			preventDefault() {},
		});

		expect(startRegister).not.toHaveBeenCalled();
		expect(toast.error).toHaveBeenCalled();
	});

	test('should register the user when the passwords match', () => {
		wrapper.find('form.bg-white input[name="rName"]').simulate('change', {
			target: {
				name: 'rName',
				value: 'Test',
			},
		});

		wrapper.find('form.bg-white input[name="rEmail"]').simulate('change', {
			target: {
				name: 'rEmail',
				value: 'test@gmail.com',
			},
		});
		wrapper
			.find('form.bg-white input[name="rPassword1"]')
			.simulate('change', {
				target: {
					name: 'rPassword1',
					value: '11111',
				},
			});
		wrapper
			.find('form.bg-white input[name="rPassword2"]')
			.simulate('change', {
				target: {
					name: 'rPassword2',
					value: '11111',
				},
			});

		// SUBMIT
		wrapper.find('form.bg-white').simulate('submit', {
			preventDefault() {},
		});

		expect(startRegister).toHaveBeenCalled();
		expect(toast.error).not.toHaveBeenCalled();
	});
});
