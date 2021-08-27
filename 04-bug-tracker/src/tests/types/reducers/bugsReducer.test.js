import { bugsReducer } from '../../../reducers/bugsReducer';
import { types } from '../../../types/types';

describe('bugsReducer Test', () => {
    test('should load the bugs', () => {
        const testsPayload = [{ bug: 1 }];
        const state = bugsReducer(
            {
                bugs: [],
                active: null,
            },
            {
                type: types.bugsLoad,
                payload: testsPayload,
            }
        );

        expect(state).toEqual({
            bugs: testsPayload,
            active: null,
        });
    });

    test('should clean the bugs when user logout', () => {
        const state = bugsReducer(
            {
                bugs: [{ bug: 1 }, { bug: 1 }],
                active: null,
            },
            {
                type: types.bugsLogoutCleaning,
            }
        );

        expect(state.bugs.length).toBe(0);
    });
});
