import React, { useContext } from 'react';

import { mount } from 'enzyme';
import {
	AuthContext,
	useAuthContext,
} from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';

describe('<LoginScreen /> Test', () => {
	const wrapper = mount(
		<AuthContext>
			<LoginScreen />
		</AuthContext>
	);
	test('should render properly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call dispatch and the navigation', () => {
		const dispatch = jest.fn();
		React.useContext = () => dispatch;
		const contextValues = [{}, dispatch];

		const wrapper = mount(
			<AuthContext>
				<LoginScreen />
			</AuthContext>
		);

		console.log(wrapper);
		expect(dispatch).toHaveBeenCalled();
	});
});
