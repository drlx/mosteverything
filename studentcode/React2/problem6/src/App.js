import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  addToList = () => {
    let value = document.getElementById("input").value;
    this.setState({ list: this.state.list.concat(<li>{value}</li>)});
  };
  render() {
    return (
      <div className="App">
        <input id="input" />
        <button onClick={this.addToList}>CLICK</button>
        <ul>{this.state.list}</ul>
      </div>
    );
  }
}

export default App;
