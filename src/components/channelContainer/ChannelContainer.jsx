import React from 'react'

import './channelContainer.css'

import {deleteChannel, fetchChannels, postChannel} from '../../repository/channels.repository'
import ChannelList from '../channelList/ChannelList'
import TextInput from '../textInput/TextInput'

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
      <div className="channelList">
        <ChannelList channelList={this.state.channelList} buttonCallback={this.handleDeleteChannel}/>
      </div>
      <div className="newChannelInput">
        <TextInput callback={this.handleNewChannel}/>
      </div>
    </div>
  }
}
