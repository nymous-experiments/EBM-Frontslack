import React from 'react'
import PropTypes from 'prop-types'

export default class ChannelItem extends React.PureComponent {
  static propTypes = {
    channel: PropTypes.shape({
        name: PropTypes.string,
        _id: PropTypes.string
      })
  }

  render() {
    return <p>{this.props.channel.name}</p>
  }
}
