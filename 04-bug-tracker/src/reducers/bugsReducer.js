// {

import { types } from '../types/types';

// bugs : []
// active : {
//     id:"dasljdlaskjd"
//     title: titleOfthebug
//     status:"open, in progres , et"
//     createdAt:"time when the bug was created"
//     reporter : "name of the reporter"
//     severity :"Lo hi "
// } || null

// }

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
