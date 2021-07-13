import React from "react";
import "./Results.css";
import Loading from "./Loading";
import {
  FaUserAlt,
  FaCompass,
  FaSuitcase,
  FaUsers,
  FaUserFriends,
  FaGitAlt,
} from "react-icons/fa";

import { fetchUser } from "../utils/api";
import {ThemeConsumer} from "../contexts/theme";
import queryString from "query-string";
import {Link} from "react-router-dom"



const Player = ({ data, result, isTie }) => {
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
    <ThemeConsumer>
      {({theme})=>(
        <div className={theme === "light" ? "repo lg":"repo dark"}>
      <h4>{isTie ? "Tie" : result}</h4>
      <img src={avatar_url} alt={"Avatar of " + login} />
      <span className="score">Score: {score.toLocaleString()}</span>

      <h2>{login}</h2>
      <ul className="list">
        <li>
          <FaUserAlt size={22} color="rgb(239,115,115)" />
          {name}
        </li>

        {location && (
          <li>
            <FaCompass size={22} color="rgb(144,115,255)" />
            {location}
          </li>
        )}
        <li>
          <FaUsers size={22} color="rgb(129,195,245)" />
          {followers.toLocaleString()} Followers
        </li>
        {company && (
          <li>
            <FaSuitcase size={22} color="#795548" />
            {company}
          </li>
        )}
        <li>
          <FaUserFriends color="rgb(64,183,95)" size={22} />
          {following.toLocaleString()} Following
        </li>

        <li>
          <FaGitAlt />
          {public_repos} repositories
        </li>
      </ul>
    </div>

      )}
    </ThemeConsumer>
    
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
      tie: false,
    };
  }

  async componentDidMount() {
    const {playerOne,playerTwo}= queryString.parse(this.props.location.search)
    const players = await fetchUser(playerOne,playerTwo);
    if (!players) {
      this.setState({ error: true, loading: false });
      return;
    }
    const [playerWin, playerLose] = players;
    this.setState({
      loading: false,
      winner: playerWin,
      loser: playerLose,
      tie: playerWin.score === playerLose.score,
    });
  }
  render() {
    const { loading, winner, loser, error, tie } = this.state;
    if (loading) {
      return <Loading text="Battling"/>;
    }
    if (error) {
      return <div>The Robot HAS PROBLEMS PLEASE TRY AGAIN</div>;
    }
    return (
      <>
        <div className="results_container">
          <Player data={winner} result={"winner"} isTie={tie} />
          <Player data={loser} result={"loser"} isTie={tie} />
        </div>
        {!error && (
          <Link to="/battle"className="btn dark-btn" >
            RESET
          </Link>
        )}
      </>
    );
  }
}
