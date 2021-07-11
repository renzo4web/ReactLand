import React from "react";
import "./Results.css";
import {
  FaUserAlt,
  FaCompass,
  FaSuitcase,
  FaUsers,
  FaUserFriends,
  FaGitAlt,
} from "react-icons/fa";

import { fetchUser } from "../utils/api";

const Player = ({ data, result }) => {
  const {
    public_repos,
    avatar_url,
    login,
    name,
    followers,
    following,
    company,
    location,
    score,
  } = data;
  return (
    <div>
      <h4>{result}</h4>
      <img src={avatar_url} alt={"Avatar of " + login} />
      <span>Score: {score}</span>

      <h2>{login}</h2>
      <ul>
        <li>
          <FaUserAlt />
          {name}
        </li>

        <li title={login + "Location"}>
          <FaCompass />
          {location}
        </li>

        <li>
          <FaUsers />
          Followers {followers}
        </li>
        {company && (
          <li>
            <FaSuitcase />
            {company}
          </li>
        )}
        <li>
          <FaUserFriends />
          Following {following}
        </li>

        <li>
          <FaGitAlt />
          {public_repos}
        </li>
      </ul>
    </div>
  );
};

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const players = await fetchUser(this.props.playerOne, this.props.playerTwo);
    if (!players) {
      this.setState({ error: true, loading: false });
      return;
    }

    const [playerWin, playerLose] = players;
    this.setState({
      loading: false,
      winner: playerWin,
      loser: playerLose,
    });
  }
  render() {
    const { loading, winner, loser, error } = this.state;
    if (loading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <div>The Robot HAS PROBLEMS PLEASE TRY AGAIN</div>;
    }
    return (
      <>
        <div className="results_container">
          <Player data={winner} result={"winner"} />
          <Player data={loser} result={"loser"} />
        </div>
        {!error && <button onClick={this.props.onResetBattle}>RESET</button>}
      </>
    );
  }
}
