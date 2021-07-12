import React from "react";
export default class Hover extends React.Component {
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
