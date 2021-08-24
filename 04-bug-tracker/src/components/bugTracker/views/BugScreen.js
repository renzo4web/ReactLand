import React from "react";
import { useParams } from "react-router-dom";

const BugScreen = () => {
  let { bugId } = useParams();

  return (
    <div>
      <h1>{bugId}</h1>
    </div>
  );
};

export default BugScreen;
