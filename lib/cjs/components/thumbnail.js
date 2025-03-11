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
var MAX_THUMBNAIL_DIMENSION = 999;
var Thumbnail = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function Thumbnail(props) {
    var _this;
    _classCallCheck(this, Thumbnail);
    _this = _callSuper(this, Thumbnail, [props]);
    _this.state = {
      failed: false
    };
    _this.handleError = _this.handleError.bind(_this);
    return _this;
  }
  _inherits(Thumbnail, _React$Component);
  return _createClass(Thumbnail, [{
    key: "getThumbnailSrc",
    value: function getThumbnailSrc(_ref) {
      var origin = _ref.origin,
        width = _ref.width,
        height = _ref.height,
        src = _ref.src;
      // eslint-disable-line class-methods-use-this
      var srcPath = src.split('//').pop();
      return "".concat(origin, "/").concat(width, "x").concat(height, "/").concat(srcPath);
    }
  }, {
    key: "handleError",
    value: function handleError() {
      if (!this.state.failed) {
        this.setState({
          failed: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var src = this.state.failed ? this.props.src : this.getThumbnailSrc(this.props);
      var dimensions = {
        width: null,
        height: null
      };
      var style = {
        maxWidth: this.props.width,
        maxHeight: this.props.height
      };
      if (this.props.format === 'mp4') {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
            width: "300",
            controls: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("source", {
              src: this.props.src,
              type: "video/mp4"
            })
          })
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", _objectSpread(_objectSpread(_objectSpread({
        alt: ""
      }, this.props), {}, {
        src: src
      }, dimensions), {}, {
        style: style,
        onError: this.handleError
      }));
    }
  }]);
}(_react["default"].Component);
Thumbnail.defaultProps = {
  format: 'image',
  height: MAX_THUMBNAIL_DIMENSION,
  origin: 'https://thumbnails.zooniverse.org',
  src: '',
  width: MAX_THUMBNAIL_DIMENSION
};
Thumbnail.propTypes = {
  format: _propTypes["default"].string,
  height: _propTypes["default"].number,
  origin: _propTypes["default"].string,
  src: _propTypes["default"].string,
  width: _propTypes["default"].number
};