import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.randomNumber = Math.floor(Math.random()*100)+1;
}
  checkNumber = () =>{
    let value = document.getElementById('input').value
    if (value == this.randomNumber){
      alert('your guessed right!');
    }
    else if (this.randomNumber < value){
      alert('too high!');
    }
    else{
      alert('too low!');
    }
  }
  render() {
    return (
      <div className="App">
      <input id='input'></input>
      <button onClick={this.checkNumber}>SUBMIT</button>
      </div>
    );
  }
}

export default App;
