import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { emojify } from 'react-emojione';



class App extends Component {
  constructor() {
    super();
    this.user = 'DEFAULT';
    this.responses = [<span>ROB: YES! {emojify("👉")}</span>, <span>ROB: NO! {emojify("👎")}</span>, <span>ROB: GUCCI {emojify("💯")}</span>]
    this.fredresponses = [<span>FRED: THATS RIGHT {emojify("👌")}</span>, <span> FRED: {emojify("🍆🍆🍆")}</span>, <span>FRED: DEF GUCCI {emojify("💯💯💯")}</span>]
    this.state = {
      value: '',
      value2: '',
      chat: [],
      userShow: true,
      uservalue: '',
      chat2: [],
      chatToggle: false,
      chatToggle2: false,
      toggleShow: false,
      hideChats: true,
    };
  }
  handleUser = (evt) => {
    evt.preventDefault();
    this.user = this.state.uservalue;
    this.setState({ userShow: false, toggleShow: true });
  }
  handleChangeUser = (evt) => {
    this.setState({ uservalue: evt.target.value })
  }
  fredRespond = () => {
    let rando = Math.floor(Math.random() * 3)
    this.setState({ chat: this.state.chat.concat(this.fredresponses[rando]) })
  }
  robRespond = () => {
    let rando = Math.floor(Math.random() * 3)
    this.setState({ chat2: this.state.chat2.concat(this.responses[rando]) })
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ chat: this.state.chat.concat(this.user + ': ' + this.state.value) });
    this.setState({ value: '' })
    setTimeout(this.fredRespond, 1000)
  }

  handleChange = (evt) => {
    this.setState({ value: evt.target.value })
  }
  handleSubmit2 = (evt) => {
    evt.preventDefault();
    this.setState({ chat2: this.state.chat2.concat(this.user + ': ' + this.state.value2) });
    this.setState({ value2: '' })
    setTimeout(this.robRespond, 1000)
  }

  handleChange2 = (evt) => {
    this.setState({ value2: evt.target.value })
  }
  toggleChat = (evt) => {
    this.setState({ chatToggle: !this.state.chatToggle, hideChats: false })
  }
  toggleChat2 = (evt) => {
    this.setState({ chatToggle2: !this.state.chatToggle2, hideChats: false })
  }
  render() {
    let lify = (x) => <li>{x}</li>
    let userForm = (<div>
      <form onSubmit={this.handleUser}>
        CHOOSE USERNAME:
      <input value={this.state.uservalue} onChange={this.handleChangeUser} type='text'></input>
        <input type='Submit'></input>
      </form>
    </div>)

    let chat1 = (<div>
      <ul>{this.state.chat.map(lify)}</ul>
      <form onSubmit={this.handleSubmit}>
        CHAT1:
      <input value={this.state.value} onChange={this.handleChange} type='text'></input>
        <input type='submit'></input>
      </form>
    </div>)

    let chat2 = (<div>
      <ul>{this.state.chat2.map(lify)}</ul>
      <form onSubmit={this.handleSubmit2}>
        CHAT2:
      <input value={this.state.value2} onChange={this.handleChange2} type='text'></input>
        <input type='submit'></input>
      </form>
    </div>)

    let toggleChat1 = (<button onClick={this.toggleChat}>TOGGLE CHAT ONE</button>)
    let toggleChat2 = (<button onClick={this.toggleChat2}>TOGGLE CHAT TWO</button>)


    return (
      <body>
        {this.state.userShow ? userForm : null}
        <div className='chat'>
          {this.state.toggleShow ? toggleChat1 : null}
          {this.state.toggleShow ? toggleChat2 : null}
          {this.state.hideChats ? null : this.state.chatToggle ? chat1 : null}
          {this.state.hideChats ? null : this.state.chatToggle2 ? chat2 : null}
        </div>
      </body>

    );
  }
}

export default App;
