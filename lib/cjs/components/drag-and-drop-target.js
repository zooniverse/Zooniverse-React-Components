"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
var DragAndDropTarget = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function DragAndDropTarget(props) {
    var _this;
    _classCallCheck(this, DragAndDropTarget);
    _this = _callSuper(this, DragAndDropTarget, [props]);
    _this.state = {
      canDrop: false
    };
    _this.handleDragEnter = _this.handleDragEnter.bind(_this);
    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleDragLeave = _this.handleDragLeave.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);
    return _this;
  }
  _inherits(DragAndDropTarget, _React$Component);
  return _createClass(DragAndDropTarget, [{
    key: "handleDragEnter",
    value: function handleDragEnter(e) {
      e.preventDefault();
      this.setState({
        canDrop: true
      });
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this.props.onDragEnter(args);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e) {
      e.preventDefault();
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      this.props.onDragOver(args);
    }
  }, {
    key: "handleDragLeave",
    value: function handleDragLeave(e) {
      e.preventDefault();
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      this.props.onDragLeave(args);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e) {
      e.preventDefault();
      this.setState({
        canDrop: false
      });
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      this.props.onDrop(args);
    }
  }, {
    key: "render",
    value: function render() {
      var className = "file-drop-target ".concat(this.props.className).trim();
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, this.props), {}, {
        className: className,
        onDragEnter: this.handleDragEnter,
        onDragOver: this.handleDragOver,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop,
        "data-can-drop": this.state.canDrop || null,
        children: this.props.children
      }));
    }
  }]);
}(_react["default"].Component);
DragAndDropTarget.defaultProps = {
  children: null,
  className: '',
  onDragEnter: function onDragEnter() {},
  onDragOver: function onDragOver() {},
  onDragLeave: function onDragLeave() {},
  onDrop: function onDrop() {}
};
DragAndDropTarget.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  onDragEnter: _propTypes["default"].func,
  onDragOver: _propTypes["default"].func,
  onDragLeave: _propTypes["default"].func,
  onDrop: _propTypes["default"].func
};