import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import EmojiList from './EmojiList';
import EmojiForm from './EmojiForm';

import data from './data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: data
      
    }
  }



  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Emoji-Search</h1>
        </header>
        <p className="App-intro">
          Building an Emoji-Search app with react...
        </p>

        <div>
        <EmojiForm />
        <EmojiList newEmojis = {this.state.emojis}/>

        </div>


      </div>
    );
  }
}

export default App;
