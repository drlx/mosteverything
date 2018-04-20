import React, { Component } from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {valueF: '',valueL: ''};
  }
 
  handleFChange = (event) => {
    this.setState({valueF: event.target.value});
  }
  handleLChange = (event) => {
    this.setState({valueL: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.valueF + ' ' +this.state.valueL);
    event.preventDefault();
  }
  clearForm = () => {
    console.log('IM RUNNING')
    this.setState({valueF: '', valueL: ''});
  }
 
  render = () => {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          First Name:
          <input type="text" value={this.state.valueF} onChange={this.handleFChange} />
          Last Name:
          <input type="text" value={this.state.valueL} onChange={this.handleLChange} />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={this.clearForm}>Clear Form</button>
          </div>
    );

  }
 }

export default App;
