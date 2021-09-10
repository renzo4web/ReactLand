import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import moment from 'moment';
import React from 'react';
import toast from 'react-hot-toast';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { eventStartUpdate, eventStartAddNew } from '../../../actions/events';
import ModalCalendar from '../../../components/calendar/ModalCalendar';
import CalendarLangContext from '../../../contexts/CalendarLangContext';

jest.mock('../../../actions/events', () => ({
	eventStartDelete: jest.fn(),
	setActiveEvent: jest.fn(),
	eventStartLoading: jest.fn(),
	eventStartUpdate: jest.fn(),
	eventStartAddNew: jest.fn(),
}));

jest.mock('react-hot-toast', () => ({
	error: jest.fn(),
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const end = now.clone().add(1, 'hours');

const initialFormVals = {
	title: 'Hello World',
	notes: 'Something',
	start: now.toDate(),
	end: end.toDate(),
};

const initState = {
	auth: {
		uid: '123123123',
		name: 'test',
	},
	calendar: {
		events: [],
		activeEvent: {
			...initialFormVals,
		},
	},
};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<CalendarLangContext>
			<ModalCalendar show={true} setShow={() => {}} />
		</CalendarLangContext>
	</Provider>
);

describe('Test components/calendar/ModalCalendar', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should render properly', () => {
		expect(wrapper.find('Modal').at(0).prop('show')).toBe(true);
	});

	test('should call eventStartUpdate', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault() {},
		});

		expect(eventStartUpdate).toHaveBeenCalledWith(initialFormVals);
	});

	test('should call toast.error when title is not provided', () => {
		const initState = {
			auth: {
				uid: '123123123',
				name: 'test',
			},
			calendar: {
				events: [],
				activeEvent: {
					...initialFormVals,
					title: '',
				},
			},
		};
		const store = mockStore(initState);
		store.dispatch = jest.fn();

		const wrapper = mount(
			<Provider store={store}>
				<CalendarLangContext>
					<ModalCalendar show={true} setShow={() => {}} />
				</CalendarLangContext>
			</Provider>
		);

		wrapper.find('form').simulate('submit', {
			preventDefault() {},
		});
		expect(toast.error).toHaveBeenCalled();
	});

	test('should dispatch eventStartAddNew', () => {
		const initState = {
			auth: {
				uid: '123123123',
				name: 'test',
			},
			calendar: {
				events: [],
				activeEvent: null,
			},
		};
		const store = mockStore(initState);
		store.dispatch = jest.fn();

		const wrapper = mount(
			<Provider store={store}>
				<CalendarLangContext>
					<ModalCalendar show={true} setShow={() => {}} />
				</CalendarLangContext>
			</Provider>
		);

		wrapper.find('input[name="title"]').simulate('change', {
			target: {
				name: 'title',
				value: 'Hello World',
			},
		});

		wrapper.find('form').simulate('submit', {
			preventDefault() {},
		});

		expect(eventStartAddNew).toHaveBeenCalled();

		expect(toast.error).not.toHaveBeenCalled();
	});
});
