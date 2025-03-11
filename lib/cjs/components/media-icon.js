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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var MediaIcon = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function MediaIcon(props) {
    var _this;
    _classCallCheck(this, MediaIcon);
    _this = _callSuper(this, MediaIcon, [props]);
    _this.state = {
      deleting: false
    };
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }
  _inherits(MediaIcon, _React$Component);
  return _createClass(MediaIcon, [{
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