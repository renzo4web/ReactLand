import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { db } from '../../../firebase/firebase-config';
import {
    login,
    logout,
    startLoginEmailPassword,
    startLogout,
} from '../../../actions/auth';
import { types } from '../../../types/types';

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
};

let store = mockStore(initState);

describe('Test auth actions', () => {
    const UID = '5Zze9IIUHBM5u1GTl2UBka0dUrl2';

    beforeEach(() => {
        store = mockStore(initState);
    });

    test('login and logout should create the action', () => {
        expect(login('uiuuiuiu', 'testing')).toEqual({
            type: types.login,
            payload: {
                uid: expect.any(String),
                displayName: expect.any(String),
            },
        });

        expect(logout()).toEqual({
            type: types.logout,
        });
    });

    test('should action startLogout', async () => {
        await store.dispatch(startLogout());

        expect(store.getActions()[0]).toEqual({
            type: types.bugsLogoutCleaning,
        });

        expect(store.getActions()[1]).toEqual({
            type: types.logout,
        });
    });

    test('action startLoginWithEmailPassword', async () => {
        await store.dispatch(
            startLoginEmailPassword('test@gmail.com', '123456')
        );

        expect(store.getActions()[0]).toEqual({
            type: types.uiStartLoading,
        });
        expect(store.getActions()[1]).toEqual({
            type: types.login,
            payload: {
                uid: UID,
                displayName: null,
            },
        });
        expect(store.getActions()[2]).toEqual({
            type: types.uiFinishLoading,
        });
    });
});
