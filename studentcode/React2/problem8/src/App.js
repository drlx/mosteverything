import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.bName = 1;
    this.totalCount = 0;
    this.newCount = 1;
    this.state = {
      buttons: []
    };
  }

  createButtons = e => {
    document.getElementById(this.bName).disabled = true;
    this.totalCount++;
    if (this.bName == e.target.id) {
      this.bName++;
      let but = this.state.buttons;
      for (let i = this.bName; i <= this.bName * 2 - 1; i++) {
        but = but.concat(i);
      }
      this.setState({
        buttons: but
      });
      this.newCount++
    }
  };
  render() {
    return (
      <div className="App">
        <button id="1" onClick={this.createButtons}>
          1
        </button>
        <div>
          {this.state.buttons.map(i => (
            <button id={i} onClick={this.createButtons}>
              {i}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
