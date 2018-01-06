import React from 'react'
import PropTypes from 'prop-types'
import ChannelItem from '../channelItem/ChannelItem'

export default class ChannelList extends React.PureComponent {
  static propTypes = {
    channelList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        _id: PropTypes.string
      })
    ),
    selectedChannel: PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string
    }),
    selectChannelCallback: PropTypes.func,
    deleteCallback: PropTypes.func
  }

  static defaultProps = {
    channelList: [],
    selectedChannel: null,
    selectChannelCallback: () => {},
    deleteCallback: () => {}
  }

  render() {
    return this.props.channelList.map(channel => {
      return <ChannelItem
        key={channel._id}
        channel={channel}
        isSelected={channel === this.props.selectedChannel}
        selectCallback={this.props.selectChannelCallback}
        deleteCallback={this.props.deleteCallback}/>
    })
  }
}
