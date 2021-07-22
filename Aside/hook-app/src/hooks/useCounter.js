import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState((prev) => prev + 1);
  };
  const decrement = () => {
    setState((prev) => prev - 1);
  };
  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    reset,
    increment,
    decrement,
  };
};
