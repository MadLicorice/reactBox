'use strict';

var Submit = function Submit() {

  var message = {
    username: 'ost',
    text: 'tro',
    roomname: '4an'
  };
  return React.createElement(
    'div',
    null,
    React.createElement('input', { className: 'user', type: 'text', placeholder: 'name...' }),
    React.createElement('input', { className: 'words', type: 'text', placeholder: 'message...' }),
    React.createElement('input', { className: 'room', type: 'text', placeholder: 'room...' }),
    React.createElement('button', { className: 'btn', onClick: function onClick() {
        window.postMessages({ username: $('.user').val(), text: $('.words').val(), roomname: $('.room').val() });
      } })
  );
};

window.Submit = Submit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N1Ym1pdC5qc3giXSwibmFtZXMiOlsiU3VibWl0IiwibWVzc2FnZSIsInVzZXJuYW1lIiwidGV4dCIsInJvb21uYW1lIiwid2luZG93IiwicG9zdE1lc3NhZ2VzIiwiJCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVMsR0FBTTs7QUFFakIsTUFBSUMsVUFBVTtBQUNkQyxjQUFVLEtBREk7QUFFZEMsVUFBTSxLQUZRO0FBR2RDLGNBQVU7QUFISSxHQUFkO0FBS0UsU0FDRTtBQUFBO0FBQUE7QUFDRSxtQ0FBTyxXQUFVLE1BQWpCLEVBQXdCLE1BQUssTUFBN0IsRUFBb0MsYUFBWSxTQUFoRCxHQURGO0FBRUUsbUNBQU8sV0FBVSxPQUFqQixFQUF5QixNQUFLLE1BQTlCLEVBQXFDLGFBQVksWUFBakQsR0FGRjtBQUdFLG1DQUFPLFdBQVUsTUFBakIsRUFBd0IsTUFBSyxNQUE3QixFQUFvQyxhQUFZLFNBQWhELEdBSEY7QUFJRSxvQ0FBUSxXQUFVLEtBQWxCLEVBQXdCLFNBQVMsbUJBQVc7QUFBQ0MsZUFBT0MsWUFBUCxDQUFvQixFQUFDSixVQUFVSyxFQUFFLE9BQUYsRUFBV0MsR0FBWCxFQUFYLEVBQTZCTCxNQUFNSSxFQUFFLFFBQUYsRUFBWUMsR0FBWixFQUFuQyxFQUFzREosVUFBVUcsRUFBRSxPQUFGLEVBQVdDLEdBQVgsRUFBaEUsRUFBcEI7QUFBdUcsT0FBcEo7QUFKRixHQURGO0FBU0gsQ0FoQkQ7O0FBa0JBSCxPQUFPTCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3VibWl0ID0gKCkgPT4ge1xuXG4gIHZhciBtZXNzYWdlID0ge1xuICB1c2VybmFtZTogJ29zdCcsXG4gIHRleHQ6ICd0cm8nLFxuICByb29tbmFtZTogJzRhbidcbn07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ1c2VyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5hbWUuLi5cIi8+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3b3Jkc1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJtZXNzYWdlLi4uXCIvPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicm9vbVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJyb29tLi4uXCIvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge3dpbmRvdy5wb3N0TWVzc2FnZXMoe3VzZXJuYW1lOiAkKCcudXNlcicpLnZhbCgpLCB0ZXh0OiAkKCcud29yZHMnKS52YWwoKSwgcm9vbW5hbWU6ICQoJy5yb29tJykudmFsKCl9KX19PjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cbndpbmRvdy5TdWJtaXQgPSBTdWJtaXQ7Il19