import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {number: undefined};
    this.interval = undefined;
  }
  startTimer= () => {
  this.setState({number: document.getElementById('input').value})
  this.interval = setInterval(this.countDown,1000)
  }
  countDown = () => {
  let input = this.state.number;
  input--;
  this.setState({number: input});
  if (this.state.number <1){
    clearInterval(this.interval);
  }
  }
  render() {
    return (
      <div className="App">
<input id='input'></input>
<button onClick={this.startTimer}>CLICK ME</button>
<div><h1>{this.state.number}</h1></div>
      </div>
    );
  }
}

export default App;
