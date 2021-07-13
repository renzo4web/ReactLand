import React, { Component } from "react";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";
import { navbar, headerLg, centerText } from "./Popular.module.css";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";

import Loading from "./Loading";
import Tooltip from "./Tooltip";
import {ThemeConsumer} from "../contexts/theme"

const LanguajesNav = ({ selected, onUpdateLanguaje }) => {
  const langs = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className={navbar}>
      {langs.map((lang) => (
        <li key={lang}>
          <button
            onClick={() => onUpdateLanguaje(lang)}
            style={lang === selected ? { color: "rgb(187,46,31)" } : null}
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
const ReposGrid = ({ repos, theme }) => {
  return (
    <ul className="grid">
      {repos.map((repo, i) => {
        const { id, owner, html_url, stargazers_count, forks, open_issues } =
          repo;
        const { login, avatar_url } = owner;

        return (
          <li key={id} className={theme === "light" ? "repo lg" : "repo dark"}>
            <h4 className={(headerLg, centerText)}>#{i + 1}</h4>
            <img
              src={avatar_url}
              className="avatar"
              alt={`Avatar for ${login}`}
            />
            <h2 className="center-text">
              <a aria-label={`go to ${login}`} className="link" href={html_url}>
                {login}
              </a>
            </h2>
            <ul>
              <li>
                <Tooltip text={"Repo of " + login}>
                  <FaUser color="rgb(255,191,116)" size={22} />
                  <a href={`https://github.com/${login}`}>{login}</a>
                </Tooltip>
              </li>
              <li>
                <Tooltip text={"User stars"}>
                  <FaStar color="rgb(255,215,0)" size={22} />
                  {stargazers_count.toLocaleString()} stars
                </Tooltip>
              </li>
              <li>
                <FaCodeBranch color="rgb(129,195,245)" size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color="rgb(241,138,147)" size={22} />
                {open_issues.toLocaleString()} open issues
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
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
    this.setState((state) => {
      return {
        repos: { ...state.repos, [state.selectedLanguage]: fetchRepos },
      };
    });
    console.log(this.state);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedLanguage !== this.state.selectedLanguage) {
      console.log("COMPONENT UPDATE");
      // CHECK IF DATA IS IN CACHE
      if (!this.state.repos[this.state.selectedLanguage]) {
        console.log("Fetching Data");
        const fetchRepos = await fetchPopularRepos(this.state.selectedLanguage);

        this.setState((state) => ({
          repos: { ...state.repos, [state.selectedLanguage]: fetchRepos },
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
        <div className="main">
          {repos[selectedLanguage] ? (
            <ThemeConsumer>
              {({ theme }) => (
                <ReposGrid
                  className="grid"
                  theme={theme}
                  repos={repos[selectedLanguage]}
                />
              )}
            </ThemeConsumer>
          ) : (
            <Loading text="Fetching Repos" speed={300} />
          )}
        </div>
      </>
    );
  }
}
