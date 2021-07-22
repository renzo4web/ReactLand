import { useState, useCallback } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [state, setState] = useState(10);

  const increment = useCallback(() => {
    setState((count) => count + 1);
  }, [setState]);

  return (
    <div className="bg-light p-3">
      <h4>useCallback Hook</h4>
      <h5>{state}</h5>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
