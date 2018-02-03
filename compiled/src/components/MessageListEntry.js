"use strict";

var MessageListEntry = function MessageListEntry(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "messageEntry" },
      React.createElement(
        "div",
        { className: "username" },
        props.message.username
      ),
      React.createElement(
        "p",
        { className: "message" },
        props.message.text
      ),
      React.createElement(
        "span",
        { className: "date" },
        props.message.time
      )
    )
  );
};

window.MessageListEntry = MessageListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VMaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VMaXN0RW50cnkiLCJwcm9wcyIsIm1lc3NhZ2UiLCJ1c2VybmFtZSIsInRleHQiLCJ0aW1lIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUNyQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFBMkJBLGNBQU1DLE9BQU4sQ0FBY0M7QUFBekMsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFHLFdBQVUsU0FBYjtBQUF3QkYsY0FBTUMsT0FBTixDQUFjRTtBQUF0QyxPQUZGO0FBR0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUF3QkgsY0FBTUMsT0FBTixDQUFjRztBQUF0QztBQUhGO0FBREYsR0FEcUI7QUFBQSxDQUF2Qjs7QUFVQUMsT0FBT04sZ0JBQVAsR0FBMEJBLGdCQUExQiIsImZpbGUiOiJNZXNzYWdlTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1lc3NhZ2VMaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VFbnRyeVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntwcm9wcy5tZXNzYWdlLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPntwcm9wcy5tZXNzYWdlLnRleHR9PC9wPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPntwcm9wcy5tZXNzYWdlLnRpbWV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxud2luZG93Lk1lc3NhZ2VMaXN0RW50cnkgPSBNZXNzYWdlTGlzdEVudHJ5OyJdfQ==