import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setActiveEvent } from '../../../actions/events';
import CalendarScreen from '../../../components/calendar/CalendarScreen';
import CalendarLangContext from '../../../contexts/CalendarLangContext';

jest.mock('../../../actions/events', () => ({
	eventStartDelete: jest.fn(),
	setActiveEvent: jest.fn(),
	eventStartLoading: jest.fn(),
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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
			<CalendarScreen />
		</CalendarLangContext>
	</Provider>
);

describe('Test components/calendar/CalendarScreen', () => {
	test('should render properly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('test Calendar interactions', () => {
		const calendar = wrapper.find('Calendar');

		expect(calendar.exists()).toBe(true);

		calendar.prop('onSelectEvent')();
		expect(setActiveEvent).toHaveBeenCalled();
		act(() => {
			calendar.prop('onView')('week');
		});
		expect(localStorage.setItem).toHaveBeenCalledWith('lastView', 'week');
	});
});
