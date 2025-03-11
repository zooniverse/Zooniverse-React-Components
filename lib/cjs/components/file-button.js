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
var FileButton = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function FileButton(props) {
    var _this;
    _classCallCheck(this, FileButton);
    _this = _callSuper(this, FileButton, [props]);
    _this.state = {
      resetting: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  _inherits(FileButton, _React$Component);
  return _createClass(FileButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.resetting) {
        this.setState({
          resetting: false
        }); // eslint-disable-line react/no-did-update-set-state
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.props.onSelect(args);
      this.setState({
        resetting: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var input;
      if (this.state.resetting) {
        input = null;
      } else {
        var _this$props = this.props,
          accept = _this$props.accept,
          multiple = _this$props.multiple,
          disabled = _this$props.disabled;
        var passedProps = {
          accept: accept,
          multiple: multiple,
          disabled: disabled
        };
        input = /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({
          type: "file"
        }, passedProps), {}, {
          style: this.props.inputStyle,
          onChange: this.handleChange
        }));
      }
      var styles = Object.assign({}, this.props.rootStyle, this.props.style);
      var props = {
        'data-accept': this.props.accept,
        'data-disabled': this.props.disabled || null,
        'data-multiple': this.props.multiple || null,
        className: "file-button ".concat(this.props.className).trim(),
        style: styles
      };
      return /*#__PURE__*/_react["default"].createElement(this.props.tag, props, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: this.props.containerStyle,
        children: input
      }), this.props.children);
    }
  }]);
}(_react["default"].Component);
FileButton.defaultProps = {
  accept: '*/*',
  children: null,
  className: '',
  containerStyle: {
    height: '100%',
    left: 0,
    opacity: 0.01,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  disabled: false,
  inputStyle: {
    cursor: 'pointer',
    height: '300%',
    left: '-100%',
    opacity: 0.01,
    position: 'absolute',
    top: '-100%',
    width: '300%'
  },
  multiple: false,
  onSelect: function onSelect() {},
  rootStyle: {
    position: 'relative'
  },
  style: {},
  tag: 'label'
};
FileButton.propTypes = {
  accept: _propTypes["default"].string,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  containerStyle: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  disabled: _propTypes["default"].bool,
  inputStyle: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  multiple: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  rootStyle: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  style: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  tag: _propTypes["default"].string
};