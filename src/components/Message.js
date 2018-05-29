import React, { Component } from 'react';
import Timestamp from './Timestamp';

class Message extends Component {
  render() {
    const sender = this.props.sender;
    const time = this.props.time;
    const body = this.props.body;

    let chatEntry = 'chat-entry';
    if (sender == 'Vladimir') {
      chatEntry += ' local';
    } else {
       chatEntry += ' remote';
    }


    return (
      <div className={chatEntry}>
        <p className='entry-name'>{sender}</p>
        <div className='entry-bubble'>
          <p className='entry-body'>{body}</p>
          <p className='entry-time'><Timestamp time={time} /></p>
        </div>
      </div>
    );
  }
}

export default Message;
