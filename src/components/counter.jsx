import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  formatCount = () => {
    if (this.state.count === 0) return "Zero";
    return this.state.count;
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <span className="badge bg-primary">{this.formatCount()}</span>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={this.handleDecrement}
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
