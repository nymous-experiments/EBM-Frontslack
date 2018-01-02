import React from 'react'

import './channelContainer.css'

import {deleteChannel, fetchChannels, postChannel} from '../repository/channels.repository'
import ChannelList from './ChannelList'
import TextInput from './TextInput'

export default class ChannelContainer extends React.PureComponent {
  state = {
    channelList: []
  }

  componentWillMount() {
    this.getList()
  }

  getList = () => {
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
      .then(this.getList)
  }

  handleDeleteChannel = (channel) => {
    deleteChannel(channel)
      .then(this.getList)
  }

  render() {
    return <div className="channelContainer">
      <ChannelList channelList={this.state.channelList} buttonCallback={this.handleDeleteChannel}/>
      <TextInput callback={this.handleNewChannel}/>
    </div>
  }
}
