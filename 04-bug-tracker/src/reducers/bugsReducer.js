import { types } from '../types/types';

export const bugsReducer = (
    state = {
        bugs: [],
        active: null,
    },
    action
) => {
    const { type, payload } = action;
    switch (type) {
        case types.bugsLoad:
            return { ...state, bugs: payload };

        case types.bugsLogoutCleaning:
            return { ...state, bugs: [] };

        default:
            return state;
    }
};
