import moment from 'moment/moment';
import { types } from '../types/types';

const initialState = {
    events: [
        {
            title: 'Hola',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgColor: 'blue',
            notes: 'HOla mundo',
            user: {
                _id: '21312',
                name: 'Renzoo',
            },
        },
    ],
    activeEvent: {},
};

export const calendarReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case types.eventAddNew:
            return { ...state, events: [...state.events, payload] };

        case types.eventSetActive:
            return { ...state, activeEvent: payload };

        default:
            return state;
    }
};
