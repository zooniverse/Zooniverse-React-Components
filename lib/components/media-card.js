"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IMAGE_EXTENSIONS = ['gif', 'jpeg', 'jpg', 'png', 'svg'];
var VIDEO_EXTENSIONS = ['mp4'];

var MediaCard = /*#__PURE__*/function (_React$Component) {
  _inherits(MediaCard, _React$Component);

  var _super = _createSuper(MediaCard);

  function MediaCard() {
    _classCallCheck(this, MediaCard);

    return _super.apply(this, arguments);
  }

  _createClass(MediaCard, [{
    key: "render",
    value: function render() {
      var srcExtension = this.props.src.split('.').pop().toLowerCase();
      var mediaRender;

      if (IMAGE_EXTENSIONS.indexOf(srcExtension) >= 0) {
        mediaRender = /*#__PURE__*/_react["default"].createElement("img", {
          className: "media-card-media",
          src: this.props.src
        });
      } else if (VIDEO_EXTENSIONS.indexOf(srcExtension) >= 0) {
        mediaRender = /*#__PURE__*/_react["default"].createElement("video", {
          className: "media-card-media",
          src: this.props.src
        }, /*#__PURE__*/_react["default"].createElement("p", null, "Your browser does not support this video format."));
      } else {
        console.warn("Not sure how to render ".concat(this.props.src));
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, this.props, {
        className: "media-card ".concat(this.props.className).trim()
      }), this.props.src && /*#__PURE__*/_react["default"].createElement("div", {
        className: "media-card-header"
      }, mediaRender), this.props.children && /*#__PURE__*/_react["default"].createElement("div", {
        className: "media-card-content"
      }, this.props.children));
    }
  }]);

  return MediaCard;
}(_react["default"].Component);

exports["default"] = MediaCard;
MediaCard.propTypes = {
  src: _propTypes["default"].string
};
MediaCard.defaultProps = {
  src: ''
};