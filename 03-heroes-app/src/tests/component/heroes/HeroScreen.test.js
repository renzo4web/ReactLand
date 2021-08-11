import React from 'react';

import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import HeroScreen from '../../../components/heroes/HeroScreen';

//jest.mock('react-router-dom', () => ({
//useHistory: () => ({
//push: jest.fn(),
//length: 10,
//goBack: jest.fn(),
//}),
//}));
const mockPush = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => {
        const push = () => mockPush();
        return { push };
    },
}));

describe('<HeroScreen /> Test', () => {
    test('should render properly', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
