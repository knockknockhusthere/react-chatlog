import React, { Component } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

class App extends Component {
  render() {
    console.log(chatMessages);

    const chatLog = <ChatLog messages={chatMessages} />;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chatlog</h1>
        </header>
        <main className="App-main">
          <section>
            {chatLog}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
