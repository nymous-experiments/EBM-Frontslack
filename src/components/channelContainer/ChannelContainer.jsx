import React from 'react'
import PropTypes from 'prop-types'

import './channelContainer.css'

import {deleteChannel, fetchChannels, postChannel} from '../../repository/channels.repository'
import ChannelList from '../channelList/ChannelList'
import TextInput from '../textInput/TextInput'

export default class ChannelContainer extends React.PureComponent {
  static propTypes = {
    selectedChannel: PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string
    }),
    selectChannelCallback: PropTypes.func
  }

  state = {
    channelList: [],
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
        <ChannelList
          channelList={this.state.channelList}
          selectedChannel={this.state.selectedChannel}
          selectChannelCallback={this.props.selectChannelCallback}
          deleteCallback={this.handleDeleteChannel}/>
      </div>
      <div className="newChannelInput">
        <TextInput callback={this.handleNewChannel}/>
      </div>
    </div>
  }
}
