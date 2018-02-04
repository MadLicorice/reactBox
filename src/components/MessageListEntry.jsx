var MessageListEntry = (props) => (
  <div>
    <div className="messageEntry">
      <div className="username">{props.message.username}</div>
      <p className="message">{props.message.text}</p>
      <span className="roomname">{props.message.roomname}</span>
    </div>
  </div>
)

window.MessageListEntry = MessageListEntry;