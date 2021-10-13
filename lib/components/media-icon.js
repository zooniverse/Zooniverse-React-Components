"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _triggered = _interopRequireDefault(require("modal-form/triggered"));

var _thumbnail = _interopRequireDefault(require("./thumbnail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MediaIcon = /*#__PURE__*/function (_React$Component) {
  _inherits(MediaIcon, _React$Component);

  var _super = _createSuper(MediaIcon);

  function MediaIcon(props) {
    var _this;

    _classCallCheck(this, MediaIcon);

    _this = _super.call(this, props);
    _this.state = {
      deleting: false
    };
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MediaIcon, [{
    key: "handleDelete",
    value: function handleDelete() {
      var _this2 = this;

      this.setState({
        deleting: true
      });
      this.props.resource["delete"]().then(function () {
        _this2.setState({
          deleting: false
        });

        _this2.props.onDelete(_this2.props.resource);
      });
    }
    /* eslint-disable max-len */

  }, {
    key: "render",
    value: function render() {
      var mediaIconStyle = this.state.deleting ? {
        opacity: 0.5
      } : null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "media-icon",
        style: mediaIconStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "media-icon-thumbnail-container"
      }, /*#__PURE__*/_react["default"].createElement(_triggered["default"], {
        trigger: /*#__PURE__*/_react["default"].createElement(_thumbnail["default"], {
          className: "media-icon-thumbnail",
          src: this.props.resource.src,
          height: this.props.height,
          style: {
            position: 'relative'
          }
        })
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content-container"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        alt: "",
        src: this.props.resource.src,
        style: {
          maxHeight: '80vh',
          maxWidth: '60vw'
        }
      }))), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "media-icon-delete-button",
        disabled: this.state.deleting,
        onClick: this.handleDelete
      }, "\xD7")), this.props.resource.metadata && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "media-icon-label",
        style: {
          position: 'relative'
        }
      }, this.props.resource.metadata.filename), /*#__PURE__*/_react["default"].createElement("textarea", {
        className: "media-icon-markdown",
        value: "![".concat(this.props.resource.metadata.filename, "(").concat(this.props.resource.src, ")"),
        readOnly: true,
        style: {
          position: 'relative'
        },
        onFocus: function onFocus(e) {
          return e.target.setSelectionRange(0, e.target.value.length);
        }
      })));
    }
    /* eslint-enable */

  }]);

  return MediaIcon;
}(_react["default"].Component);

exports["default"] = MediaIcon;
MediaIcon.defaultProps = {
  height: 80,
  onDelete: function onDelete() {},
  resource: {}
};
MediaIcon.propTypes = {
  height: _propTypes["default"].number,
  onDelete: _propTypes["default"].func,
  resource: _propTypes["default"].shape({
    "delete": _propTypes["default"].func,
    id: _propTypes["default"].string,
    metadata: _propTypes["default"].object,
    src: _propTypes["default"].string
  }).isRequired
};