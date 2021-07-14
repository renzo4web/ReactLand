import React from "react";
export default class Hover extends React.Component {
  state = {
    hovering: false,
  };

  onMouseOver = () => {
    this.setState({ hovering: true });
  };
  onMouseOut = () => {
    this.setState({ hovering: false });
  };
  render() {
    return (
      <div
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onBlur={this.onMouseOut}
        onFocus={this.onMouseOver}
      >
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}
