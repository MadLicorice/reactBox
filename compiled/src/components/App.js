"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      messages: window.messages
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchMessages();
    }
  }, {
    key: "fetchMessages",
    value: function fetchMessages() {
      var _this2 = this;

      this.props.getter(function (messages) {
        _this2.setState({
          messages: messages.results
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "ReactBox"
        ),
        React.createElement(
          "div",
          { className: "inputContainer" },
          React.createElement(Submit, null)
        ),
        React.createElement(
          "div",
          { className: "messagesContainer" },
          React.createElement(MessageList, { messages: this.state.messages })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VzIiwid2luZG93IiwiZmV0Y2hNZXNzYWdlcyIsImdldHRlciIsInNldFN0YXRlIiwicmVzdWx0cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVQyxPQUFPRDtBQUROLEtBQWI7QUFIaUI7QUFNbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtFLGFBQUw7QUFDRDs7O29DQUVlO0FBQUE7O0FBQ2QsV0FBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCLFVBQUNILFFBQUQsRUFBYztBQUM5QixlQUFLSSxRQUFMLENBQWM7QUFDWkosb0JBQVVBLFNBQVNLO0FBRFAsU0FBZDtBQUdELE9BSkQ7QUFLRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0UsOEJBQUMsTUFBRDtBQURGLFNBRkY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG1CQUFmO0FBQ0UsOEJBQUMsV0FBRCxJQUFhLFVBQVUsS0FBS04sS0FBTCxDQUFXQyxRQUFsQztBQURGO0FBTEYsT0FERjtBQVdEOzs7O0VBakNlTSxNQUFNQyxTOztBQW9DeEJOLE9BQU9KLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IHdpbmRvdy5tZXNzYWdlc1xuICAgIH1cbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaE1lc3NhZ2VzKCk7XG4gIH1cbiAgXG4gIGZldGNoTWVzc2FnZXMoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXR0ZXIoKG1lc3NhZ2VzKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLnJlc3VsdHNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UmVhY3RCb3g8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Q29udGFpbmVyXCI+XG4gICAgICAgICAgPFN1Ym1pdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG4iXX0=