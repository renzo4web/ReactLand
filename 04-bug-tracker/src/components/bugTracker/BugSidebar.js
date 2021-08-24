import React from "react";
import {AiFillBug} from "react-icons/ai";
import {Link} from "react-router-dom";

const BugSidebar = ({ bug, status, severity }) => {
  return (
    <div className="sidebar__bug-card">
        <Link to={"#"}>
            <h4> <AiFillBug /> {bug}</h4>
        </Link>
      <p>Status: {status}</p>
      <p>Severity: {severity}</p>
    </div>
  );
};

export default BugSidebar;
