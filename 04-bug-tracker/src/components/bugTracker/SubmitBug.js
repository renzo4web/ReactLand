import React from "react";
import { Link } from "react-router-dom";

const SubmitBug = () => {
  return (
    <Link className="ui__btn-submit" to="/submit">
      Submit Bug
    </Link>
  );
};

export default SubmitBug;
