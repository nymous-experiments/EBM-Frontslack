import React, { Component } from 'react';

import './app.css'

import ChannelContainer from './channelContainer/ChannelContainer'

class App extends Component {
  render() {
    return (
      <ChannelContainer className="left"/>
    );
  }
}

export default App;
