import React from 'react'
import PropTypes from 'prop-types'

export default class MessageItem extends React.PureComponent {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string,
      message: PropTypes.string,
      date: PropTypes.any, //TODO
      reactions: PropTypes.arrayOf(PropTypes.string),
      _id: PropTypes.string
    })
  }

  render() {
    const message = this.props.message
    return (
      <div>
        <span>{message.message}</span>
        <span>{message.date}</span>
      </div>
    )
  }
}
