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

        default:
            return state;
    }
};
