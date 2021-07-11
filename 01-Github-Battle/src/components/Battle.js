import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Battle.css";
import { FaUserFriends, FaTrophy, FaRegTimesCircle } from "react-icons/fa";
import { GiAxeSword } from "react-icons/gi";

import Results from "./Results";

const Intructions = () => {
  return (
    <div className="itr">
      <header className="itr_header">
        <h2>Intructions</h2>
      </header>
      <div className="itr_flex">
        <div className="itr_box">
          <h3>Enter Two Github Users</h3>
          <div className="itr_icon">
            <FaUserFriends color="rgb(255,191,116)" size={200} />
          </div>
        </div>
        <div className="itr_box">
          <h3>Battle</h3>
          <div className="itr_icon">
            <GiAxeSword size={200} color="rgb(241,138,147)" />
          </div>
        </div>
        <div className="itr_box">
          <h3>See the winner</h3>
          <div className="itr_icon">
            <FaTrophy color="rgb(255,215,0)" size={200} />
          </div>
        </div>
      </div>
    </div>
  );
};
class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.props.label);
  }

  handleChange({ target }) {
    this.setState({ username: target.value });
  }

  render() {
    return (
      <form className="player" onSubmit={this.handleSubmit}>
        <label className="input_label">Player {this.props.label}</label>
        <div className="player_input">
          <input
            type="text"
            placeholder="github username"
            value={this.state.username}
            onBlur={this.handleChange}
            onChange={this.handleChange}
            className="input_control input-light"
          />
          <button
            disabled={Boolean(!this.state.username)}
            type="submit"
            className="btn dark-btn"
          >
            submit
          </button>
        </div>
      </form>
    );
  }
}
PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const PlayerPreview = ({ username, onReset, label }) => {
  return (
    <div className="player_info">
      <h3 className="player_label">Player: {label}</h3>
      <div className="pp_container">
        <img
          className={"avatar-small"}
          src={`https://github.com/${username}.png?size=200`}
          alt={`Avatar for ${label}`}
        />
        <a className="pp_link" href={`https://github.com/${username}`}>
          {username}
        </a>
        <button title={"Remove Profile"} onClick={() => onReset(label)}>
          <FaRegTimesCircle size={25} color="rgb(220,20,60)" />
        </button>
      </div>
    </div>
  );
};

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  labe: PropTypes.string.isRequired,
};
export default class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {
        One: null,
        Two: null,
      },
      battle: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(username, label) {
    this.setState((state) => ({
      players: { ...state.players, [label]: username },
    }));
  }
  handleReset(label) {
    this.setState((state) => ({
      players: { ...state.players, [label]: null },
    }));
  }
  handleResetBattle() {
    this.setState({ battle: false });
  }
  render() {
    console.log(this.state);
    const { One: playerOne, Two: playerTwo } = this.state.players;
    const { battle } = this.state;

    if (battle) {
      return (
        <Results
          playerOne={playerOne}
          playerTwo={playerTwo}
          onResetBattle={this.handleResetBattle}
        />
      );
    }

    return (
      <div className="container">
        <Intructions />

        {/* PLAYER INPUT */}
        <section className="players_container">
          <h2 className="center-text">Players</h2>
          <div className="input_container">
            {!playerOne ? (
              <PlayerInput label="One" onSubmit={this.handleSubmit} />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="One"
                onReset={this.handleReset}
              />
            )}
            {!playerTwo ? (
              <PlayerInput label="Two" onSubmit={this.handleSubmit} />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Two"
                onReset={this.handleReset}
              />
            )}
          </div>
        </section>
        {/* BATTLE BUTTON      */}
        {playerOne && playerTwo && (
          <button
            className="btn dark-btn btn-space"
            onClick={() => this.setState({ battle: true })}
          >
            BATTLE
          </button>
        )}
      </div>
    );
  }
}
