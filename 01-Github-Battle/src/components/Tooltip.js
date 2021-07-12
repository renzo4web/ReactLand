import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
};

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver() {
    this.setState({ hovering: true });
  }
  onMouseOut() {
    this.setState({ hovering: false });
  }
  render() {
    const { hovering } = this.state;
    const { children, text } = this.props;
    return (
      <div
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onBlur={this.onMouseOut}
        onFocus={this.onMouseOver}
        style={styles.container}
      >
        {hovering && <div style={styles.tooltip}>{text}</div>}
        {children}
      </div>
    );
  }
}
