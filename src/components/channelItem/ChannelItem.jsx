import React from 'react'
import PropTypes from 'prop-types'

import './channelItem.css'

export default class ChannelItem extends React.PureComponent {
  static propTypes = {
    channel: PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string
    }),
    isSelected: PropTypes.bool,
    selectCallback: PropTypes.func,
    deleteCallback: PropTypes.func
  }

  static defaultProps = {
    selectCallback: () => {},
    deleteCallback: () => {}
  }

  handleDelete = () => {
    this.props.deleteCallback(this.props.channel)
  }

  handleSelect = () => {
    this.props.selectCallback(this.props.channel)
  }

  render() {
    return <div className="channelItem">
      <span className="channelItem--name" onClick={this.handleSelect}>{this.props.channel.name}</span>
      <button className="channelItem--deleteButton" onClick={this.handleDelete}>X</button>
    </div>
  }
}
