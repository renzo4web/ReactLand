import { types } from '../types/types';

const authReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.login:
      return { ...state, ...payload, logged: true };

    case types.logout:
      return { ...payload, logged: false };

    default:
      throw new Error(
        `authReducer receibed invalid type ${type}`
      );
  }
};

export { authReducer };
