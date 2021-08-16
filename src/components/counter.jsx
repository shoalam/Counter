import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Counter extends Component {
  // formatCount = () => {
  //   if (this.state.count === 0) return "Zero";
  //   return this.state.count;
  // };

  render() {
    return (
      <div>
        <span className="badge bg-primary">{this.props.value}</span>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => this.props.onIncrement(this.props.id)}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => this.props.onDecrement(this.props.id)}
        >
          -
        </button>
        <button type="button" className="btn btn-danger m-2">
          Delete
        </button>
      </div>
    );
  }
}
