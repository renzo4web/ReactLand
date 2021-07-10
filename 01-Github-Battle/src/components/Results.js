import React from "react";
import {
  FaUserAlt,
  FaCompass,
  FaSuitcase,
  FaUsers,
  FaUserFriends,
  FaGitAlt,
} from "react-icons/fa";

import { fetchUser } from "../utils/api";

const Player = (data) => {
  const { public_repos,avatar_url, login, name, followers, following, company } = data;
  return (
    <div>
      <h4>WINNER</h4>
      <img src={avatar_url} alt={"Avatar of " + login} />
      <span>SCORE</span>

      <h2>{login}</h2>
      <ul>
        <li>
          <FaUserAlt />
          {name}
        </li>

        <li title={login + "Location"}>
          <FaCompass />
          {name}
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
      playerOne: null,
      playerTwo: null,
    };
    this.fetchUsers();
  }
  async fetchUsers() {
    const players = await fetchUser(this.props.playerOne, this.props.playerTwo);
    console.log(players);
    const [playerOne, playerTwo] = players;
    this.setState({
      playerOne: playerOne,
      playerTwo: playerTwo,
    });
  }
  render() {
    return (
      <div>
        <Player data={this.state.playerOne} />
        <Player data={this.state.playerTwo} />
      </div>
    );
  }
}
