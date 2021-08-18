import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge bg-secondary">
              {this.props.nonZeroItems}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}
