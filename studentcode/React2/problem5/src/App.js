import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      button: <button onClick={this.leftButton}>B1</button>
    }
  }
  leftButton = () => {
    this.setState({button: <button onClick={this.rightButton}>B2</button>})
  }
  rightButton = () => {
    this.setState({button: <button onClick={this.leftButton}>B1</button>})
  }
  render() {
    return (
      <div className="App">
      {this.state.button}
      </div>
    );
  }
}

export default App;
