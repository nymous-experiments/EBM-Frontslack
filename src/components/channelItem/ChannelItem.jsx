import React from 'react'
import PropTypes from 'prop-types'

import './channelItem.css'

export default class ChannelItem extends React.PureComponent {
  static propTypes = {
    channel: PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string
    }),
    buttonCallback: PropTypes.func
  }

  static defaultProps = {
    buttonCallback: () => {}
  }

  handleClick = () => {
    this.props.buttonCallback(this.props.channel)
  }

  render() {
    return <div className="channelItem">
      <span className="channelItem--name">{this.props.channel.name}</span>
      <button className="channelItem--deleteButton" onClick={this.handleClick}>X</button>
    </div>
  }
}
