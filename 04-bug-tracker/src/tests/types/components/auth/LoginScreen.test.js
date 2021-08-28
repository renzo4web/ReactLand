import configureStore from 'redux-mock-store'; //ES6 modules
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import LoginScreen from '../../../../components/auth/LoginScreen';
import { MemoryRouter } from 'react-router-dom';
import {
    startGoogleLogin,
    startLoginEmailPassword,
} from '../../../../actions/auth';

jest.mock('../../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'testinguid',
        name: 'Test',
    },
    bugs: {
        bugs: [],
        active: null,
    },
    ui: {
        msgError: null,
        loading: true,
    },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Test <LoginScreen />', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('wrapper should snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should trigger action startGoogleLogin', () => {
        wrapper.find('.google-btn').prop('onClick')();

        expect(startGoogleLogin).toHaveBeenCalled();
    });

    test('should trigger startLoginEmailPassword()', () => {
        const testEmail = 'test@gmail.com';
        const testPassword = 'cccccccccccccc';
        wrapper
            .find('input#email')
            .simulate('change', {
                target: { name: 'email', value: testEmail },
            });
        wrapper
            .find('input#password')
            .simulate('change', {
                target: { name: 'password', value: testPassword },
            });

        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(startLoginEmailPassword).toHaveBeenCalled();
    });
});
