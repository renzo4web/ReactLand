import React from "react";
import { Link } from "react-router-dom";
import {GrAddCircle} from "react-icons/gr";

const SubmitBug = () => {
  return (
    <Link className="ui__btn-submit" to="/submit">
          <GrAddCircle /> Submit Bug
    </Link>
  );
};

export default SubmitBug;
