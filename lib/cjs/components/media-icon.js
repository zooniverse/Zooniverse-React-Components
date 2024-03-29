"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _triggered = _interopRequireDefault(require("modal-form/triggered"));
var _thumbnail = _interopRequireDefault(require("./thumbnail"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var MediaIcon = exports["default"] = /*#__PURE__*/function (_React$Component) {
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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "media-icon",
        style: mediaIconStyle,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "media-icon-thumbnail-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_triggered["default"], {
            trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)(_thumbnail["default"], {
              className: "media-icon-thumbnail",
              src: this.props.resource.src,
              height: this.props.height,
              style: {
                position: 'relative'
              }
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "content-container",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                alt: "",
                src: this.props.resource.src,
                style: {
                  maxHeight: '80vh',
                  maxWidth: '60vw'
                }
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "media-icon-delete-button",
            disabled: this.state.deleting,
            onClick: this.handleDelete,
            children: "\xD7"
          })]
        }), this.props.resource.metadata && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "media-icon-label",
            style: {
              position: 'relative'
            },
            children: this.props.resource.metadata.filename
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            className: "media-icon-markdown",
            value: "![".concat(this.props.resource.metadata.filename, "(").concat(this.props.resource.src, ")"),
            readOnly: true,
            style: {
              position: 'relative'
            },
            onFocus: function onFocus(e) {
              return e.target.setSelectionRange(0, e.target.value.length);
            }
          })]
        })]
      });
    }
    /* eslint-enable */
  }]);
  return MediaIcon;
}(_react["default"].Component);
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