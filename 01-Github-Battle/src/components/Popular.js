import React, { Component } from "react";

export default class Popular extends Component {
  render() {
    const langs = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (
      <div>
        {langs.map((lang) => (
          <li key={lang}>
            <button aria-label="">{lang}</button>
          </li>
        ))}
      </div>
    );
  }
}
