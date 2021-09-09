import moment from 'moment';
import React from 'react';
import Alert from 'react-bootstrap/Alert';

const CalendarEvent = ({ event }) => {
	const { title, user, start, end } = event;
	return (
		<div>
			<strong> {title} </strong>
			<span>- {user.name} </span>
		</div>
	);
};

export default CalendarEvent;
