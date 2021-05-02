import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.like) classes += "-o";
    return (
      <button onClick={this.props.toggleLike} className="btn">
        <i className={classes} aria-hidden="true"></i>
      </button>
    );
  }
}

export default Like;
