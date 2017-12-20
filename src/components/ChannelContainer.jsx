import React from 'react'

import {fetchChannels} from '../repository/channels.repository'
import ChannelList from './ChannelList'

export default class ChannelContainer extends React.PureComponent {
  state = {
    channelList: []
  }

  componentWillMount() {
    fetchChannels()
      .then(results => {
        console.log(results)
        this.setState({
          channelList: results
        })
      })
  }

  render() {
    console.log('ChannelContainer state', this.state)
    return <ChannelList channelList={this.state.channelList}/>
  }
}
