import React, { Component } from 'react';

class ChatLog extends Component {
  render() {
    const messageList = this.props.messages;

    const messages = messageList.map((message,key) => {
      <Message key={key} sender={message.sender} body={message.body} time={message.timeStampe}/>
    })
    return (

    );
  }
}

export default ChatLog;
