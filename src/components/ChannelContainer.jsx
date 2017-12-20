import React from 'react'

import './channelContainer.css'

import {fetchChannels, postChannel} from '../repository/channels.repository'
import ChannelList from './ChannelList'
import TextInput from './TextInput'

export default class ChannelContainer extends React.PureComponent {
  state = {
    channelList: []
  }

  componentWillMount() {
    fetchChannels()
      .then(results => {
        this.setState({
          channelList: results
        })
      })
  }

  handleNewChannel = (channelName) => {
    const channel = {name: channelName}
    postChannel(channel)
      .then()
}

  render() {
    return <div className="channelContainer">
      <ChannelList channelList={this.state.channelList}/>
      <TextInput callback={this.handleNewChannel}/>
    </div>
  }
}
