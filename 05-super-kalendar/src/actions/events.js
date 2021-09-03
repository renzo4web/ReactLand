import { types } from '../types/types';

export const addNewEvent = event => ({
	type: types.eventAddNew,
	payload: event,
});

export const setActiveEvent = event => ({
	type: types.eventSetActive,
	payload: event,
});

export const cleanActiveEvent = () => ({
	type: types.eventCleanActive,
});

export const updatedEvent = event => ({
	type: types.eventUpdated,
	payload: event,
});

export const deletedEvent = () => ({
	type: types.eventDeleted,
});
