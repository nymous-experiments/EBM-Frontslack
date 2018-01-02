import React, { Component } from 'react';

import './app.css'

import ChannelContainer from './channelContainer/ChannelContainer'
import MessageContainer from './messageContainer/MessageContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ChannelContainer/>
        <MessageContainer/>
      </div>
    );
  }
}

export default App;
