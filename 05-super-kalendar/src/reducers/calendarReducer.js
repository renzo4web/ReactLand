import moment from 'moment/moment';
import { types } from '../types/types';

// {
// 			id: dsd,
// 			title: 'Hola',
// 			start: moment().toDate(),
// 			end: moment().add(2, 'hours').toDate(),
// 			notes: 'HOla mundo',
// 			user: {
// 				_id: '21312',
// 				name: 'Renzoo',
// 			},
// 		}

const initialState = {
	events: [],
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

		case types.eventLoaded:
			return { ...state, events: [...payload] };

		case types.eventCleanAll:
			return { ...initialState };

		default:
			return state;
	}
};
