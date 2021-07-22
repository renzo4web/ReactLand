import React from "react";
import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { reset, increment, decrement, state } = useCounter();
  return (
    <div className="bg-light p-3">
      <h3>Counter With Custom Hook : {state}</h3>
      <button onClick={() => increment()} className="btn btn-primary">
        + 1
      </button>
      <button onClick={() => decrement()} className="btn btn-warning">
        - 1
      </button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default CounterWithCustomHook;
