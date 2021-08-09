import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import { authReducer } from './authReducer';

const Context = createContext();

const init = () => {
  return (
    JSON.parse(localStorage.getItem('user')) || {
      logged: false,
    }
  );
};

const AuthContext = ({ children }) => {
  const value = useReducer(authReducer, {}, init);
  const [auth, dispatch] = value;

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(auth));
  }, [auth]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(Context);
};

export { AuthContext };
