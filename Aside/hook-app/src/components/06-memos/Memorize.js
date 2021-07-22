import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Small from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { state, increment } = useCounter(9);

  console.log(JSON.stringify(state));
  return (
    <div className="bg-light p-3">
      <h4>Memorize</h4>
      <Small value={state} />
      <button onClick={increment} className="btn btn-primary d-block">
        +1
      </button>
      <button onClick={() => setShow(!show)} className="btn btn-info">
        Show/Hide
      </button>
    </div>
  );
};
