import moment from 'moment/moment';
import { types } from '../types/types';

const initialState = {
	events: [
		{
			id: new Date().getTime(),
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
	activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case types.eventAddNew:
			return { ...state, events: [...state.events, payload] };

		case types.eventSetActive:
			return { ...state, activeEvent: payload };

		case types.eventCleanActive:
			return { ...state, activeEvent: null };

		case types.eventUpdated:
			return {
				...state,
				events: [...state.events].map(event =>
					event.id === payload.id ? payload : event
				),
			};

		case types.eventDeleted:
			return {
				...state,
				events: [...state.events].filter(
					event => event.id !== state.activeEvent.id
				),
				activeEvent: null,
			};

		default:
			return state;
	}
};
