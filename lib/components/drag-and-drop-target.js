'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragAndDropTarget = function (_React$Component) {
  _inherits(DragAndDropTarget, _React$Component);

  function DragAndDropTarget(props) {
    _classCallCheck(this, DragAndDropTarget);

    var _this = _possibleConstructorReturn(this, (DragAndDropTarget.__proto__ || Object.getPrototypeOf(DragAndDropTarget)).call(this, props));

    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleDragLeave = _this.handleDragLeave.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);
    return _this;
  }

  _createClass(DragAndDropTarget, [{
    key: 'handleDragEnter',
    value: function handleDragEnter(e) {
      e.preventDefault();
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(e) {
      e.preventDefault();
    }
  }, {
    key: 'handleDragLeave',
    value: function handleDragLeave(e) {
      e.preventDefault();
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(e) {
      var _props;

      e.preventDefault();
      (_props = this.props).onDrop.apply(_props, arguments);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = ('file-drop-target ' + this.props.className).trim();
      return _react2.default.createElement(
        'div',
        _extends({}, this.props, {
          className: className,
          onDragEnter: this.handleDragEnter,
          onDragOver: this.handleDragOver,
          onDragLeave: this.handleDragLeave,
          onDrop: this.handleDrop
        }),
        this.props.children
      );
    }
  }]);

  return DragAndDropTarget;
}(_react2.default.Component);

exports.default = DragAndDropTarget;


DragAndDropTarget.defaultProps = {
  children: null,
  className: '',
  onDrop: function onDrop() {}
};

DragAndDropTarget.propTypes = {
  children: _react2.default.PropTypes.node,
  className: _react2.default.PropTypes.string,
  onDrop: _react2.default.PropTypes.func
};