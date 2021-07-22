import { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";

const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { state, increment } = useCounter(100);

  const heavyProcces = (nOfIterations) => {
    for (let i = 0; i < nOfIterations; i++) {
      console.log("Starting computations");
    }
    return `${nOfIterations} completed`;
  };

  const memoCount = useMemo(() => heavyProcces(state), [state]);

  return (
    <div className="bg-light p-3">
      <h4>Memo Hook</h4>

      {show && <h5>{memoCount}</h5>}

      <button onClick={increment} className="btn btn-primary d-block">
        +1
      </button>

      <button onClick={() => setShow(!show)} className="btn btn-info">
        Show/Hide
      </button>
    </div>
  );
};

export default MemoHook;
