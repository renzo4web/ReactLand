import React, { createRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { TiArrowBack } from "react-icons/ti";
import SelectStatus from "../ui/SelectStatus";
import Navbar from "./Navbar";
import SelectSeverity from "../ui/SelectSeverity";
import { getAlertMessage } from "../../helpers/getAlertMessage";

const SubmitBugScreen = () => {
  const [formVals, setFormVals] = useState({
    name: "",
    email: "",
    severity: "major",
    description: "",
    status: "all",
    assignee: "",
  });
  const [error, setError] = useState("");

  const elRef = useRef();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    elRef.current = target;

    const alertMsg = getAlertMessage(value, name);
    // TODO fix submit must all field be valid
    if (alertMsg) {
      setError(alertMsg);
      return;
    } else {
      setError(false);
    }

    setFormVals({
      ...formVals,
      [name]: value,
    });
    console.log(formVals);
  };

  const handleSubmit = () => {
    // SEND INFO TO DATABASE
    // use context to triggers re-render of bug entries when this form is s
    // and show the new bugs
  };

  return (
    <>
      <Navbar />
      <h4>{error && error}</h4>
      <div className="bug__submit-screen">
        <form onSubmit={handleSubmit}>
          <div className="ui__input-group">
            <label htmlFor="name">Bug Name</label>
            <input
              ref={elRef}
              onChange={handleChange}
              value={formVals["name"]}
              name="name"
              id="name"
              type="text"
            />
          </div>

          <div className="ui__input-group">
            <label htmlFor="severity">Severity</label>
            <SelectSeverity
              onChange={handleChange}
              value={formVals["severity"]}
              id="severity"
            />
          </div>

          <div className="ui__input-group">
            <label htmlFor="description">Description</label>
            <textarea
              ref={elRef}
              onChange={handleChange}
              value={formVals["description"]}
              name="description"
              id="description"
              cols="30"
              rows="10"
            />
            <p>{formVals["description"].length}/160</p>
          </div>

          <div className="ui__input-group">
            <label htmlFor="status">Status</label>
            <SelectStatus onChange={handleChange} value={formVals["status"]} />
          </div>

          <div className="ui__input-group">
            <label htmlFor="assignee">Assignee To</label>
            <input
              ref={elRef}
              onChange={handleChange}
              name="assignee"
              id="assignee"
              type="text"
              value={formVals["assignee"]}
            />
          </div>
          <button disabled={error} type="submit" className="ui__btn-submit">
            Submit Bug
          </button>
        </form>
        <Link className="ui__button-cancel" to="/">
          <TiArrowBack /> Go Back
        </Link>
      </div>
    </>
  );
};

export default SubmitBugScreen;
