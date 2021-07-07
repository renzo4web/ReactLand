import React, { Component } from "react";

import { navbar } from "./Popular.module.css";
import PropTypes from "prop-types";
import fetchPopularRepos from "../utils/api";

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

LanguajesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguaje: PropTypes.func.isRequired,
};

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: {
        All: null,
        Javascript: null,
        Ruby: null,
        Java: null,
        CSS: null,
        Python: null,
      },
    };

    this.updateLang = this.updateLang.bind(this);
  }

  updateLang(selectedLanguage) {
    this.setState({ selectedLanguage });
  }

  async componentDidMount() {
    const fetchRepos = await fetchPopularRepos();
    console.log(fetchRepos);
    this.setState(({ repos, selectedLanguage }) => ({
      ...repos,
      [selectedLanguage]: fetchRepos,
    }));
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedLanguage !== this.state.selectedLanguage) {
      console.log("COMPONENT UPDATE");
      // CHECK IF DATA IS IN CACHE
      if (!this.state.repos[this.state.selectedLanguage]) {
        console.log(this.state);
        const fetchRepos = await fetchPopularRepos(this.state.selectedLanguage);

        this.setState(({ repos, selectedLanguage }) => ({
          ...repos,
          [selectedLanguage]: fetchRepos,
        }));
      }
    }
  }

  render() {
    const { selectedLanguage, repos } = this.state;

    return (
      <>
        <LanguajesNav
          selected={selectedLanguage}
          onUpdateLanguaje={this.updateLang}
        />

        {repos[selectedLanguage] ? (
          <div className="grid">
            {repos.map((repo) => {
              const { owner } = repo;

              return (
                <div key={repo.id} className="repo">
                  <h3>{repo.name}</h3>
                  <img src={owner.avatar_url} alt={owner.login} />
                  <p>Score: {repo.score}</p>
                  <p>owner : {owner.login}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </>
    );
  }
}
