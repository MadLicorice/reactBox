class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messages: window.messages
    }
  }
  
  componentDidMount() {
    this.fetchMessages();
  }
  
  fetchMessages() {
    this.props.getter((messages) => {
      this.setState({
        messages: messages.results
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>ReactBox</h1>
        <div className="inputContainer">
          <Submit />
        </div>
        <div className="messagesContainer">
          <MessageList messages={this.state.messages}/>
        </div>
      </div>
    )
  }
}

window.App = App;

