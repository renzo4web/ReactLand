import React, { useState } from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-light p-3">
      <h4>Real Example Ref</h4>

      {show && <MultipleCustomHooks />}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};

export default RealExampleRef;
