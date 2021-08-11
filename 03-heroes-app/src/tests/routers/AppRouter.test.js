const { mount } = require('enzyme');
const testUtils = require('react-dom/test-utils');
const {
  AuthContext,
  useAuthContext,
} = require('../../auth/AuthContext');
const { AppRouter } = require('../../routers/AppRouter');
const { types } = require('../../types/types');

describe('<AppRouter />', () => {
  const contextValue = [{ logged: false }, jest.fn()];

  test('should render login if NOT authenticated ', () => {
    const wrapper = mount(
      <AuthContext>
        <AppRouter />
      </AuthContext>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
