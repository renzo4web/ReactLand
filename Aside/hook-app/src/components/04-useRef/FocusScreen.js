import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="bg-light p-3">
      <h4>FocusScreen</h4>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Your Name"
      />

      <button onClick={handleClick} className="btn btn-primary mt-2">
        Focus
      </button>
    </div>
  );
};
