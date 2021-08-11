import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';

describe('<Navbar /> Tests', () => {
    test('should render properly', () => {
        const wrapper = mount(
            <AuthContext>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
