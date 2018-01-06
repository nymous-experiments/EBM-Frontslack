import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class MessageChannelTitle extends PureComponent {
  static propTypes = {
    channel: PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string
    })
  }

  static defaultProps = {
    channel: null
  }

  render() {
    return <h1>
      {this.props.channel && this.props.channel.name}
    </h1>
  }
}
