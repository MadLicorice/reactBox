'use strict';

var message = {
  username: 'ost',
  text: 'tro',
  roomname: '4an'
};

var getMessages = function getMessages(callback) {
  $.ajax({
    type: 'GET',
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    data: { order: '-createdAt' },
    contentType: 'application/json',
    success: function success(data) {
      callback(data);
    },
    error: function error() {
      console.log('error!');
    }
  });
};

var postMessages = function postMessages(message) {
  $.ajax({
    type: 'POST',
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function success(data) {
      console.log('suceesssss');
    },
    error: function error() {
      console.log('error!');
    }
  });
};

window.getMessages = getMessages;
window.postMessages = postMessages;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsInVzZXJuYW1lIiwidGV4dCIsInJvb21uYW1lIiwiZ2V0TWVzc2FnZXMiLCJjYWxsYmFjayIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJvcmRlciIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBvc3RNZXNzYWdlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSUEsVUFBVTtBQUNaQyxZQUFVLEtBREU7QUFFWkMsUUFBTSxLQUZNO0FBR1pDLFlBQVU7QUFIRSxDQUFkOztBQU9BLElBQUlDLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFDOUJDLElBQUVDLElBQUYsQ0FBTztBQUNMQyxVQUFNLEtBREQ7QUFFTEMsU0FBSywrREFGQTtBQUdMQyxVQUFNLEVBQUVDLE9BQU8sWUFBVCxFQUhEO0FBSUxDLGlCQUFhLGtCQUpSO0FBS0xDLGFBQVUsaUJBQUNILElBQUQsRUFBVTtBQUNsQkwsZUFBU0ssSUFBVDtBQUNELEtBUEk7QUFRTEksV0FBTyxpQkFBVztBQUNoQkMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQVZJLEdBQVA7QUFZRCxDQWJEOztBQWVBLElBQUlDLGVBQWUsU0FBZkEsWUFBZSxDQUFDakIsT0FBRCxFQUFhO0FBQzlCTSxJQUFFQyxJQUFGLENBQU87QUFDTEMsVUFBTSxNQUREO0FBRUxDLFNBQUssK0RBRkE7QUFHTEMsVUFBTVEsS0FBS0MsU0FBTCxDQUFlbkIsT0FBZixDQUhEO0FBSUxZLGlCQUFhLGtCQUpSO0FBS0xDLGFBQVMsaUJBQVNILElBQVQsRUFBZTtBQUN0QkssY0FBUUMsR0FBUixDQUFZLFlBQVo7QUFDRCxLQVBJO0FBUUxGLFdBQU8saUJBQVc7QUFDaEJDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFWSSxHQUFQO0FBWUQsQ0FiRDs7QUFlQUksT0FBT2hCLFdBQVAsR0FBcUJBLFdBQXJCO0FBQ0FnQixPQUFPSCxZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBtZXNzYWdlID0ge1xuICB1c2VybmFtZTogJ29zdCcsXG4gIHRleHQ6ICd0cm8nLFxuICByb29tbmFtZTogJzRhbidcbn07XG5cblxudmFyIGdldE1lc3NhZ2VzID0gKGNhbGxiYWNrKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAnaHR0cDovL3BhcnNlLnNmbTYuaGFja3JlYWN0b3IuY29tL2NoYXR0ZXJib3gvY2xhc3Nlcy9tZXNzYWdlcycsXG4gICAgZGF0YTogeyBvcmRlcjogJy1jcmVhdGVkQXQnIH0sXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBzdWNjZXNzOiAoKGRhdGEpID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pLFxuICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciEnKVxuICAgIH0gXG4gIH0pXG59XG5cbnZhciBwb3N0TWVzc2FnZXMgPSAobWVzc2FnZSkgPT4ge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICdodHRwOi8vcGFyc2Uuc2ZtNi5oYWNrcmVhY3Rvci5jb20vY2hhdHRlcmJveC9jbGFzc2VzL21lc3NhZ2VzJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNlZXNzc3NzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciEnKVxuICAgIH0gXG4gIH0pXG59XG5cbndpbmRvdy5nZXRNZXNzYWdlcyA9IGdldE1lc3NhZ2VzO1xud2luZG93LnBvc3RNZXNzYWdlcyA9IHBvc3RNZXNzYWdlczsiXX0=