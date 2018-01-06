import React from 'react'
import PropTypes from 'prop-types'

import {fetchMessages} from '../../repository/channels.repository'
import MessageList from '../messageList/MessageList'
import MessageChannelTitle from '../messageChannelTitle/MessageChannelTitle'

export default class MessageContainer extends React.PureComponent {
  static propTypes = {
    channel: PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string
    })
  }

  static defaultProps = {
    channel: null
  }

  state = {
    messageList: []
  }

  componentWillMount() {
    if (this.props.channel) {
      this.getMessages(this.props.channel)
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.channel) {
      this.getMessages(nextProps.channel)
    }
  }

  getMessages = (channel) => {
    fetchMessages(channel)
      .then(results => {
        this.setState({messageList: results})
      })
  }

  render() {
    return <div>
      <MessageChannelTitle channel={this.props.channel}/>
      <MessageList messageList={this.state.messageList}/>
    </div>
  }
}
