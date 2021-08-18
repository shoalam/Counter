import React, { Component } from "react";

export default class Reset extends Component {
  render() {
    return (
      <div className="container-fluid">
        <button
          onClick={this.props.onReset}
          type="button"
          className="btn btn-primary m-4"
        >
          Reset
        </button>
      </div>
    );
  }
}
