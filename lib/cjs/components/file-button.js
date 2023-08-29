"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
var FileButton = /*#__PURE__*/function (_React$Component) {
  _inherits(FileButton, _React$Component);
  var _super = _createSuper(FileButton);
  function FileButton(props) {
    var _this;
    _classCallCheck(this, FileButton);
    _this = _super.call(this, props);
    _this.state = {
      resetting: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(FileButton, [{
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
  return FileButton;
}(_react["default"].Component);
exports["default"] = FileButton;
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