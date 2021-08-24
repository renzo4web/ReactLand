import { types } from '../types/types';

export const uiReducer = (
    state = {
        loading: false,
        msgError: null,
    },
    action
) => {
    const { payload, type } = action;

    switch (type) {
        case types.uiSetError:
            return { ...state, msgError: payload };

        case types.uiRemoveError:
            return { ...state, msgError: null };

        case types.uiStartLoading:
            return { ...state, loading: true };

        case types.uiFinishLoading:
            return { ...state, loading: false };
        default:
            return state;
    }
};
