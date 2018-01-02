import React, { Component } from 'react';

import './app.css'

import ChannelContainer from './channelContainer/ChannelContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ChannelContainer/>
      </div>
    );
  }
}

export default App;
