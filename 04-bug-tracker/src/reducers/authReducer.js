import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.login:
      return {
        uid: payload.uid,
        name: payload.displayName,
      };

    case types.logout:
      return {};

    case types.register:
      return {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      };

    default:
      return state;
  }
};
