import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import moment from 'moment/moment';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	cleanActiveEvent,
	eventStartAddNew,
	eventStartUpdate,
} from '../../actions/events';

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const end = now.clone().add(1, 'hours');

const initialFormVals = {
	title: '',
	notes: '',
	start: now.toDate(),
	end: end.toDate(),
};

const ModalCalendar = ({ show, setShow }) => {
	const handleClose = () => {
		setFormVals(initialFormVals);
		dispatch(cleanActiveEvent());
		setShow(false);
	};

	const dispatch = useDispatch();
	const { activeEvent } = useSelector(state => state.calendar);

	const [dateStart, setDateStart] = useState(() => now.toDate());
	const [dateEnd, setDateEnd] = useState(() => end.toDate());

	const [formVals, setFormVals] = useState(initialFormVals);

	const { title, notes } = formVals;

	useEffect(() => {
		activeEvent === null
			? setFormVals(initialFormVals)
			: setFormVals(activeEvent);
	}, [activeEvent]);

	const handleStartDateChange = e => {
		setDateStart(e);
		setFormVals(currentVal => ({
			...currentVal,
			start: e,
		}));
	};

	const handleEndDateChange = e => {
		setDateEnd(e);

		setFormVals(currentVal => ({
			...currentVal,
			end: e,
		}));
	};

	const handleFormChanges = ({ target }) => {
		const { value, name } = target;

		setFormVals(current => ({
			...current,
			[name]: value,
		}));
	};

	const handleSubmitForm = e => {
		e.preventDefault();
		const momentStart = moment(formVals.start);
		const momentEnd = moment(formVals.end);

		if (momentStart.isSameOrAfter(momentEnd)) {
			toast.error('The end date must be after start date');
			return;
		}

		if (title.trim() < 2) {
			toast.error('Title of the event must be completed');
			return;
		}

		activeEvent
			? dispatch(eventStartUpdate(formVals))
			: dispatch(eventStartAddNew(formVals));

		setFormVals(initialFormVals);
		setShow(false);
	};

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header>
				<Modal.Title>
					{activeEvent ? 'Edit Event' : 'New Event'}
				</Modal.Title>
			</Modal.Header>

			<Form onSubmit={handleSubmitForm} className="container">
				<Modal.Body>
					<Form.Group>
						<Form.Label>Date and Hour Start</Form.Label>
						<DatePicker
							className={'form-control'}
							showTimeSelect
							dateFormat="Pp"
							onChange={handleStartDateChange}
							selected={dateStart}
						/>
					</Form.Group>

					<Form.Group className={'my-2'}>
						<Form.Label className="my-2">
							Date and Hour End
						</Form.Label>
						<DatePicker
							showTimeSelect
							className={'form-control'}
							dateFormat="Pp"
							onChange={handleEndDateChange}
							selected={dateEnd}
							minDate={dateStart}
						/>
					</Form.Group>

					<hr />

					<Form.Group>
						<Form.Label>Title and Notes</Form.Label>
						<Form.Control
							type="text"
							placeholder="Event title"
							name="title"
							value={title}
							onChange={handleFormChanges}
							onBlur={handleFormChanges}
							autoComplete="off"
						/>
						<FloatingLabel
							className={'mt-3'}
							controlId="floatingTextarea2"
							label="Aditional info"
						>
							<Form.Control
								as="textarea"
								name="notes"
								value={notes}
								onChange={handleFormChanges}
								onBlur={handleFormChanges}
								placeholder="Leave a info here"
								style={{ height: '100px' }}
							/>
						</FloatingLabel>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmitForm}>
						Save Event
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default ModalCalendar;
