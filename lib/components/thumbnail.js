"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MAX_THUMBNAIL_DIMENSION = 999;

var Thumbnail = /*#__PURE__*/function (_React$Component) {
  _inherits(Thumbnail, _React$Component);

  var _super = _createSuper(Thumbnail);

  function Thumbnail(props) {
    var _this;

    _classCallCheck(this, Thumbnail);

    _this = _super.call(this, props);
    _this.state = {
      failed: false
    };
    _this.handleError = _this.handleError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Thumbnail, [{
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
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("video", {
          width: "300",
          controls: true
        }, /*#__PURE__*/_react["default"].createElement("source", {
          src: this.props.src,
          type: "video/mp4"
        })));
      }

      return /*#__PURE__*/_react["default"].createElement("img", _extends({
        alt: ""
      }, this.props, {
        src: src
      }, dimensions, {
        style: style,
        onError: this.handleError
      }));
    }
  }]);

  return Thumbnail;
}(_react["default"].Component);

exports["default"] = Thumbnail;
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