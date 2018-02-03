class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messages: window.messages
    }

  }
  
  render() {
    return (
      <div>
        <h1>ReactBox</h1>
        <div className="inputContainer">
          <Search />
        </div>
        <div className="messagesContainer">
          <MessageList messages={this.state.messages}/>
        </div>
      </div>
    )
  }
}

window.App = App;

