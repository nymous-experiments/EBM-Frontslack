import React from 'react'
import PropTypes from 'prop-types'
import MessageItem from '../messageItem/MessageItem'

export default class MessageList extends React.PureComponent {
  static propTypes = {
    messageList: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        message: PropTypes.string,
        date: PropTypes.any, //TODO
        reactions: PropTypes.arrayOf(PropTypes.string),
        _id: PropTypes.string
      })
    )
  }

  static defaultProps = {
    messageList: []
  }

  render() {
    return this.props.messageList.map(message => {
      return <MessageItem message={message}/>
    })
  }
}
