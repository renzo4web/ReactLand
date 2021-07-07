import React, { Component } from "react";

import { navbar } from "./Popular.module.css";

const LanguajesNav = ({ selected, onUpdateLanguaje }) => {
  const langs = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className={navbar}>
      {langs.map((lang) => (
        <li key={lang}>
          <button
            onClick={() => onUpdateLanguaje(lang)}
            style={lang === selected ? { color: "red" } : null}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
    };

    this.updateLang = this.updateLang.bind(this);
  }

  updateLang(selectedLanguage) {
    this.setState({ selectedLanguage });
  }

  render() {
    const { selectedLanguage } = this.state;

    return (
      <>
        <LanguajesNav
          selected={selectedLanguage}
          onUpdateLanguaje={this.updateLang}
        />
      </>
    );
  }
}
