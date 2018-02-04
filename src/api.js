
var message = {
  username: 'ost',
  text: 'tro',
  roomname: '4an'
};


var getMessages = (callback) => {
  $.ajax({
    type: 'GET',
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    data: { order: '-createdAt' },
    contentType: 'application/json',
    success: ((data) => {
      callback(data);
    }),
    error: function() {
      console.log('error!')
    } 
  })
}

var postMessages = (message) => {
  $.ajax({
    type: 'POST',
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function(data) {
      console.log('suceesssss')
    },
    error: function() {
      console.log('error!')
    } 
  })
}

window.getMessages = getMessages;
window.postMessages = postMessages;