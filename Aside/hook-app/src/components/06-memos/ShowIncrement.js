import React, { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  console.log("I am rerendering again!!!");
  return (
    <button onClick={increment} className="btn btn-primary">
      Increment
    </button>
  );
});

ShowIncrement.displayName = "ShowIncrement";
export default ShowIncrement;
