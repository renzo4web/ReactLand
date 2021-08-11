import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routers/PrivateRoute';

describe('<PrivateRoute /> Test', () => {
  const props = {
    location: {
      pathname: '/',
    },
  };
  Storage.prototype.setItem = jest.fn();

  test('should render the component if authenticated ', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Test</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
  });

  test('should NOT show the component when is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Test</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
  });
});
