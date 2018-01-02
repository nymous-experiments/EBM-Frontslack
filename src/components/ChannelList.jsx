import React from 'react'
import PropTypes from 'prop-types'
import ChannelItem from './ChannelItem'

export default class ChannelList extends React.PureComponent {
  static propTypes = {
    channelList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        _id: PropTypes.string
      })
    ),
    buttonCallback: PropTypes.func
  }

  render() {
    return this.props.channelList.map(channel => {
      return <ChannelItem channel={channel} buttonCallback={this.props.buttonCallback}/>
    })
  }
}
