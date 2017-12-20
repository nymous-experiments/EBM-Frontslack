import React from 'react'
import propTypes from 'prop-types'

export default class ChannelItem extends React.PureComponent {
  static propTypes = {
    channel: propTypes.shape({
        name: propTypes.string,
        _id: propTypes.string
      })
  }

  render() {
    return <p>{this.props.channel.name}</p>
  }
}
