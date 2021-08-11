import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';

describe('<DashboardRoutes /> Test', () => {
  test('should render properly', () => {
    const wrapper = mount(
      <AuthContext>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
