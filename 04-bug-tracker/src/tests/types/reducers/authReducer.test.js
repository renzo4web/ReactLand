import { authReducer } from '../../../reducers/authReducer';
import { types } from '../../../types/types';

describe('authReducer test', () => {
    let defaultState;

    beforeEach(() => {
        defaultState = {
            uid: 'jasdkaknsd13424b',
            name: 'ExampleUser',
        };
    });

    test('should login user', () => {
        const testPayload = {
            uid: 'daskjdl124',
            displayName: 'renzo',
        };
        const state = authReducer(
            {},
            {
                type: types.login,
                payload: testPayload,
            }
        );

        expect(state).toEqual({
            uid: testPayload.uid,
            name: testPayload.displayName,
        });
    });

    test('should logout user', () => {
        const state = authReducer(defaultState, {
            type: types.logout,
        });

        expect(state).toEqual({});
    });

    test('should return default state when invalid action is sent to reducer', () => {
        const state = authReducer(defaultState, {
            type: 'INVALID TYPE ACTION',
        });

        expect(state).toEqual(defaultState);
    });
});
