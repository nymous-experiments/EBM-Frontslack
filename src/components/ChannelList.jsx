import React from 'react'
import propTypes from 'prop-types'
import ChannelItem from './ChannelItem'

export default class ChannelList extends React.PureComponent {
  static propTypes = {
    channelList: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string,
        _id: propTypes.string
      })
    )
  }

  render() {
    return this.props.channelList.map(channel => {
      return <ChannelItem channel={channel}/>
    })
  }
}
