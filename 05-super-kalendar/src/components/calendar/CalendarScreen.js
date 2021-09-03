import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Container from 'react-bootstrap/Container';

import { useCalendarContext } from '../../contexts/CalendarLangContext';
import { messagesEs } from '../../helpers/calendar-messages-es';
import HeaderNavbar from '../ui/HeaderNavbar';
import CalendarEvent from './CalendarEvent';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ModalCalendar from './ModalCalendar';
import { useDispatch, useSelector } from 'react-redux';
import {
	cleanActiveEvent,
	setActiveEvent,
	deletedEvent,
} from '../../actions/events';
import AddNewFab from '../ui/AddNewFab';
import RemoveEventFab from '../ui/RemoveEventFab';

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
	const { events, activeEvent } = useSelector(state => state.calendar);
	const dispatch = useDispatch();
	const [lastView, setLastView] = useState(
		() => localStorage.getItem('lastView') || 'month'
	);
	const [show, setShow] = useState(false);

	const { currLang } = useCalendarContext();

	const onDoubleClick = () => {
		setShow(true);
	};

	const onSelect = event => {
		dispatch(setActiveEvent(event));
	};

	const onViewChange = event => {
		setLastView(event);
	};

	const handleSelectSlot = event => {
		dispatch(cleanActiveEvent());
		const { start, end } = event;
		dispatch(setActiveEvent({ start, end }));
		setShow(true);
	};

	moment.locale(currLang);

	return (
		<Container fluid>
			<HeaderNavbar />

			<ModalCalendar show={show} setShow={setShow} />

			<Container className={'my-4'} fluid>
				<Calendar
					localizer={localizer}
					events={events}
					startAccessor="start"
					endAccessor="end"
					style={{ height: '80vh' }}
					onDoubleClickEvent={onDoubleClick}
					onSelectEvent={onSelect}
					onSelectSlot={handleSelectSlot}
					onView={onViewChange}
					view={lastView}
					selectable
					messages={currLang === 'es' && messagesEs}
					components={{
						event: CalendarEvent,
					}}
				/>
			</Container>

			<AddNewFab
				onClick={() => {
					setShow(true);
					dispatch(cleanActiveEvent());
				}}
			/>

			{activeEvent && (
				<RemoveEventFab onClick={() => dispatch(deletedEvent())} />
			)}
		</Container>
	);
};

export default CalendarScreen;
