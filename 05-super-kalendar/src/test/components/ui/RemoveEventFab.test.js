import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { eventStartDelete } from '../../../actions/events';
import RemoveEventFab from '../../../components/ui/RemoveEventFab';

// Configuration to test components that use REDUX
jest.mock('../../../actions/events', () => ({
	eventStartDelete: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
// mock dispatch, because the action are already tested.
// just to know if the component are calling the dispatch
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<RemoveEventFab onClick={() => store.dispatch(eventStartDelete())} />
	</Provider>
);

describe('Test components/ui/RemoveEventFab', () => {
	test('should render properly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call eventStartDelete', () => {
		wrapper.find('button.btn').simulate('click');

		expect(eventStartDelete).toHaveBeenCalled();
	});
});
