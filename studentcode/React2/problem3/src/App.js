import React, { Component } from 'react';
import './App.css';

class App extends Component {
  isCorrect = () => {
    var input = document.getElementById('input').value;
    if (input == '42'){
      alert('You guessed correctly!')
    }
    else{
      alert('Wrong guess. Try again!!')
    }
  }
  render() {
    return (
      <div className="App">
      <input id='input'></input>
      <button id='button' onClick={this.isCorrect}> SUBMIT</button> 
      </div>
    );
  }
}

export default App;
