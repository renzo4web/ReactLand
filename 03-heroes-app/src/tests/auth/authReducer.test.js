import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('authReducer Test', () => {
  let state = null;
  let defaultState = null;

  beforeEach(() => {
    defaultState = {
      name: 'Renzo',
      logged: false,
    };
    state = authReducer(defaultState, {
      type: 'default',
    });
  });

  test('should return default state', () => {
    expect(state).toStrictEqual(defaultState);
  });

  test('should auth and place the user name', () => {
    const state = authReducer(
      {},
      {
        type: types.login,
        payload: {
          name: 'Renzo',
        },
      }
    );

    expect(state).toEqual({
      logged: true,
      name: expect.any(String),
    });
  });

  test('should delete user name and logged false', () => {
    const state = authReducer(
      {
        logged: true,
        name: 'Renzo',
      },
      {
        type: types.logout,
      }
    );

    expect(state.logged).toBe(false);
  });
});
