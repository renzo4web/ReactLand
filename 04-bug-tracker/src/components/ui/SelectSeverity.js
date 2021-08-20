import React from "react";

const SelectSeverity = ({ value, onChange, ...rest }) => {
  return (
    <>
      <select value={value} onChange={onChange} name="severity" {...rest}>
        <option value="major">Major</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="showstopper">Showstopper</option>
        <option value="none">none</option>
      </select>
    </>
  );
};

export default SelectSeverity;
