import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Counters />
      </>
    );
  }
}
