import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
  super();
  this.state = {bText: 'hello',
                counter: 0}
  }
  bClick = () => {
    this.state.counter++;
    this.setState({bText: 'TEXT' + this.state.counter})
  }
  render() {
    return (
      <div className="App">
          <button onClick = {this.bClick}> {this.state.bText}</button>
      </div>
    );
  }
}

export default App;
