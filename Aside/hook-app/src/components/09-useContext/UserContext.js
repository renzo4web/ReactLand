import React, {
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext();

export const UserContext = ({ children }) => {
  const value = useState("light");

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const useStateApp = () => {
  return useContext(Context);
};
