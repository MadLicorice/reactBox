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
        { className: "roomname" },
        props.message.roomname
      )
    )
  );
};

window.MessageListEntry = MessageListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VMaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VMaXN0RW50cnkiLCJwcm9wcyIsIm1lc3NhZ2UiLCJ1c2VybmFtZSIsInRleHQiLCJyb29tbmFtZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFEO0FBQUEsU0FDckI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQTJCQSxjQUFNQyxPQUFOLENBQWNDO0FBQXpDLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBRyxXQUFVLFNBQWI7QUFBd0JGLGNBQU1DLE9BQU4sQ0FBY0U7QUFBdEMsT0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFBNEJILGNBQU1DLE9BQU4sQ0FBY0c7QUFBMUM7QUFIRjtBQURGLEdBRHFCO0FBQUEsQ0FBdkI7O0FBVUFDLE9BQU9OLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiTWVzc2FnZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNZXNzYWdlTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlRW50cnlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57cHJvcHMubWVzc2FnZS51c2VybmFtZX08L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj57cHJvcHMubWVzc2FnZS50ZXh0fTwvcD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvb21uYW1lXCI+e3Byb3BzLm1lc3NhZ2Uucm9vbW5hbWV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxud2luZG93Lk1lc3NhZ2VMaXN0RW50cnkgPSBNZXNzYWdlTGlzdEVudHJ5OyJdfQ==