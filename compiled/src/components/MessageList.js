"use strict";

var MessageList = function MessageList(props) {
  return React.createElement(
    "div",
    { className: "message-list" },
    props.messages.map(function (message, index) {
      return React.createElement(MessageListEntry, { message: message, key: index });
    })
  );
};

window.MessageList = MessageList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VMaXN0LmpzeCJdLCJuYW1lcyI6WyJNZXNzYWdlTGlzdCIsInByb3BzIiwibWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWY7QUFDR0EsVUFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLGFBQ2xCLG9CQUFDLGdCQUFELElBQWtCLFNBQVNELE9BQTNCLEVBQW9DLEtBQUtDLEtBQXpDLEdBRGtCO0FBQUEsS0FBbkI7QUFESCxHQURnQjtBQUFBLENBQWxCOztBQVFBQyxPQUFPTixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJNZXNzYWdlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNZXNzYWdlTGlzdCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtbGlzdFwiPlxuICAgIHtwcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiBcbiAgICAgIDxNZXNzYWdlTGlzdEVudHJ5IG1lc3NhZ2U9e21lc3NhZ2V9IGtleT17aW5kZXh9Lz5cbiAgICApfVxuICA8L2Rpdj5cbilcblxud2luZG93Lk1lc3NhZ2VMaXN0ID0gTWVzc2FnZUxpc3Q7Il19