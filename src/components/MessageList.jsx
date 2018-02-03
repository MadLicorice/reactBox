var MessageList = (props) => (
  <div className="message-list">
    {props.messages.map((message, index) => 
      <MessageListEntry message={message} key={index}/>
    )}
  </div>
)

window.MessageList = MessageList;