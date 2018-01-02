import React from 'react'
import PropTypes from 'prop-types'

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
    return <div>
      <span>{this.props.channel.name}</span>
      <button onClick={this.handleClick}>X</button>
    </div>
  }
}
