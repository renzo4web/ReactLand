import toast from 'react-hot-toast';
import { fetchWithToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

/*
	ADDING THE EVENTS TO DB
*/

export const eventStartAddNew = event => {
	return async (dispatch, getState) => {
		const { name, uid } = getState().auth;

		try {
			const response = await fetchWithToken('events', event, 'POST');
			const body = await response.json();

			if (body.ok) {
				dispatch(
					addNewEvent({
						...event,
						id: body.event.id,
						user: {
							_id: uid,
							name,
						},
					})
				);
			} else {
				toast.error(body.msg);
			}
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
};

const addNewEvent = event => ({
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

/*
	UPDATE EVENT
*/
export const eventStartUpdate = event => {
	return async dispatch => {
		try {
			const response = await fetchWithToken(
				`events/${event.id}`,
				event,
				'PUT'
			);

			const body = await response.json();
			if (body.ok) {
				dispatch(updatedEvent(event));
			} else {
				toast.error(body.msg);
			}
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
};

const updatedEvent = event => ({
	type: types.eventUpdated,
	payload: event,
});

/*
	DELETE EVENT
*/

export const eventStartDelete = () => {
	return async (dispatch, getState) => {
		const { activeEvent } = getState().calendar;

		try {
			const response = await fetchWithToken(
				`events/${activeEvent.id}`,
				{},
				'DELETE'
			);

			const { ok, msg } = await response.json();

			if (ok) {
				dispatch(deletedEvent());
			} else {
				toast.error(msg);
			}
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
};

const deletedEvent = () => ({
	type: types.eventDeleted,
});

export const eventsCleanAll = () => ({
	type: types.eventCleanAll,
});

/*
	LOADING THE EVENTS FROM DB
*/

export const eventStartLoading = () => {
	return async dispatch => {
		try {
			const response = await fetchWithToken('events');

			const body = await response.json();

			if (body.ok) {
				const eventsPrepared = prepareEvents(body.events);
				dispatch(eventsLoaded(eventsPrepared));
			} else {
				toast.error(body.msg);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const eventsLoaded = events => ({
	type: types.eventLoaded,
	payload: events,
});
