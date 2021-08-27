import { types } from '../../types/types';

describe('Test of types', () => {
    test('should types equal object reference', () => {
        const objReference = {
            // authReducer
            login: '[Auth] Login',
            logout: '[Auth] Logout',
            register: '[Auth] Register',
            // uiReducer
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',
            // bugsReducer
            bugsLoad: '[Bugs] Load bugs',
            bugsLogoutCleaning: '[Bugs] Logout Cleaning',
        };

        expect(types).toStrictEqual(objReference);
    });
});
