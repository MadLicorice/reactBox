var Submit = () => {

  var message = {
  username: 'ost',
  text: 'tro',
  roomname: '4an'
};
    return (
      <div>
        <input className="user" type="text" placeholder="name..."/>
        <input className="words" type="text" placeholder="message..."/>
        <input className="room" type="text" placeholder="room..."/>
        <button className="btn" onClick={function() {window.postMessages({username: $('.user').val(), text: $('.words').val(), roomname: $('.room').val()})}}></button>
      </div>
    )

}

window.Submit = Submit;