import React, { Component } from "react";

import Popular from "./components/Popular";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Popular />
        <h1>Hello React!</h1>
        <i className="em em-beetle" aria-label="LADY BEETLE"></i>
        1F60D
      </div>
    );
  }
}
