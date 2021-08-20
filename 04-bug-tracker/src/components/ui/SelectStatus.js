import React from "react";

const SelectStatus = ({ onChange, value }) => {
  return (
    <>
      <select
        value={value}
        onChange={onChange}
        name="status"
        id="select-status"
      >
        <option value="all">All Open</option>
        <option value="closed">Closed</option>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="to-do">To do</option>
      </select>
    </>
  );
};

export default SelectStatus;
