import React from "react";
import PropTypes from "prop-types";

const style = {
  content: {
    fontSize: "2rem",
    right: "0",
    marginTop: "20px",
    textAlign: "center",
  },
};

export default class Loading extends React.Component {
  state = {
    content: this.props.text,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.state.content === `${this.props.text}...`
        ? this.setState({ content: this.props.text })
        : this.setState(({ content }) => ({ content: content + "." }));
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p style={style.content} className="loading">
        {this.state.content}
      </p>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
