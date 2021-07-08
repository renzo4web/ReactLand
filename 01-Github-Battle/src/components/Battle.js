import React, { Component } from "react";
import "./Battle.css";
import { FaUserFriends, FaTrophy } from "react-icons/fa";
import { GiAxeSword } from "react-icons/gi";

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
            <FaUserFriends color="rgb(255,191,116)" size={125} />
          </div>
        </div>
        <div className="itr_box">
          <h3>Battle</h3>
          <div className="itr_icon">
            <GiAxeSword size={125} color="rgb(241,138,147)" />
          </div>
        </div>
        <div className="itr_box">
          <h3>See the winner</h3>
          <div className="itr_icon">
            <FaTrophy color="rgb(255,215,0)" size={125} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default class Battle extends Component {
  render() {
    return (
      <div className="container">
        <Intructions />
      </div>
    );
  }
}
