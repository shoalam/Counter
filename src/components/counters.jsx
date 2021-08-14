import React, { Component } from "react";
import Counter from "./counter";
export default class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
    ],
  };
  render() {
    return this.state.counters.map((counter) => {
      return <Counter key={counter.id} />;
    });
  }
}
