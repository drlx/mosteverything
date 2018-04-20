import React, { Component } from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {valueF: '',valueL: '',button: null, valueFeed: ''};
  }
 
  handleFChange = (event) => {
    if (this.state.valueF !=='' && this.state.valueL !==''){
      this.setState({button: <input type="submit" value="Submit" />});
    }
    this.setState({valueF: event.target.value});
  }
  handleLChange = (event) => {
    if (this.state.valueF !=='' && this.state.valueL !==''){
      this.setState({button: <input type="submit" value="Submit" />});
    }
    this.setState({valueL: event.target.value});
  }

  handleFeedChange = (event) => {
    this.setState({valueFeed: event.target.value});
  }

  handleFeedSubmit = (event) => {
   
    alert('Youve submitted ' + this.state.valueFeed.length + ' characters of feedback');
    event.preventDefault();
  }
 
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.valueF + ' ' +this.state.valueL);
    event.preventDefault();
  }
  clearForm = () => {
    console.log('IM RUNNING')
    this.setState({valueF: '', valueL: ''});
  }
  swapInputs = () => {
    let tempF = this.state.valueF;
    let tempL = this.state.valueL;
    this.setState({valueF: tempL, valueL:tempF})
  }
 
  render = () => {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          First Name:
          <input type="text" value={this.state.valueF} onChange={this.handleFChange} />
          Last Name:
          <input type="text" value={this.state.valueL} onChange={this.handleLChange} />
        {this.state.button}
      </form>
      <button onClick={this.clearForm}>Clear Form</button>
      <button onClick={this.swapInputs}>Swap</button>
      
      <div>
      <form onSubmit={this.handleFeedSubmit}>
          Give us feedback on this page:
          <textarea type="text" value={this.state.valueFeed} onChange={this.handleFeedChange} />
          <input type="submit" value="Submit" />
      </form>
      </div>
      
       </div>
    );

  }
 }

export default App;
