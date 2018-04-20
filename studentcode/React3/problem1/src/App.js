import React, { Component } from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      valueF: '',
      valueL: ''
    };
  }

  handleFirstNameChange = (event) => {
    this.setState({
      valueF: event.target.value,
    });
    console.log(this.state.valueF)
  }

  handleLastNameChange = (event) => {
    this.setState({
      valueL: event.target.value,
    });
    console.log(this.state.valueL)
  }

  handleSubmit = (event) => {
    alert('Hello ' + this.state.valueF + ' ' + this.state.valueL);
    event.preventDefault();
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        First Name:
          <input type="text" value={this.state.value} onChange={this.handleFirstNameChange} />
        Last Name:
          <input type="text" value={this.state.value} onChange={this.handleLastNameChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
