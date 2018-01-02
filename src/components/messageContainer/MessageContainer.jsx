import React from 'react'

import {fetchMessages} from '../../repository/channels.repository'
import MessageList from '../messageList/MessageList'

export default class MessageContainer extends React.PureComponent {
  state = {
    messageList: []
  }

  render() {
    return <div>
      <MessageList messageList={this.state.messageList}/>
    </div>
  }
}
