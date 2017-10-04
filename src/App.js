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
      filteredEmojis: data,
      emojis: data,
      filter: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.emojisFilter = this.emojisFilter.bind(this)
  }

  handleChange(event) {
    this.setState({
      filter: event.target.value
    });
    this.emojisFilter(this.state.filter)
  }

  emojisFilter(emojis) {
    let result = this.state.emojis.filter((emoji) => {
      return emoji.keywords.includes(this.state.filter) || emoji.title.includes(this.state.filter)
    });
    this.setState({
      filteredEmojis: result
    })
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
          <EmojiForm filter={this.state.filter}
            handleChange={this.handleChange}
          />
          <EmojiList newEmojis={this.state.filteredEmojis}

          />

        </div>


      </div>
    );
  }


}

export default App;
