import React, { Component } from 'react';

import './app.css'

import ChannelContainer from './channelContainer/ChannelContainer'
import MessageContainer from './messageContainer/MessageContainer'

class App extends Component {
  state = {
    selectedChannel: null
  }

  handleChangeChannel = (channel) => {
    this.setState({selectedChannel: channel})
  }

  render() {
    return (
      <div className="app">
        <ChannelContainer selectedChannel={this.state.selectedChannel} selectChannelCallback={this.handleChangeChannel}/>
        <MessageContainer channel={this.state.selectedChannel}/>
      </div>
    );
  }
}

export default App;
