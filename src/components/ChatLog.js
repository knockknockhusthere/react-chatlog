import React, { Component } from 'react';
import Message from './Message';

class ChatLog extends Component {
  render() {
    const messageList = this.props.messages;

    const messages = messageList.map((message,key) => {
      return <Message key={key} sender={message.sender} body={message.body} time={message.timeStamp} />
    })
    return (
      <section className='chatLog'>
        {messages}
      </section>
    );
  }
}

export default ChatLog;
