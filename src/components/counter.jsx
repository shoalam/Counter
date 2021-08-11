import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [0, 2],
        }
    }
    

    formatCount = () =>{
        if(this.state.items[0] === 0) return "Zero";
        return this.state.items[0];
    }

    handleIncrement = () =>{
        const arr = [...this.state.items];
        arr[0]++;
        this.setState({
            items: arr,
        })
    }

    handleDecrement = () =>{
        const arr = [...this.state.items];
        arr[0]--;
        this.setState({
            items: arr,
        })
    }
    
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar <span class="badge bg-secondary">4</span>
            </a>
          </div>
        </nav>
        <button type="button" className="btn btn-primary m-4">
          Reset
        </button>
        <ul>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-primary">{this.formatCount()}</span>
              <button type="button" className="btn btn-secondary m-2" onClick={this.handleIncrement}>
                +
              </button>
              <button type="button" className="btn btn-secondary m-2" onClick={this.handleDecrement}>
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-warning">Zero</span>
              <button type="button" className="btn btn-secondary m-2">
                +
              </button>
              <button type="button" className="btn btn-secondary m-2">
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-warning">Zero</span>
              <button type="button" className="btn btn-secondary m-2">
                +
              </button>
              <button type="button" className="btn btn-secondary m-2">
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}
