import React, { Component } from "react";

import Popular from "./components/Popular";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}
