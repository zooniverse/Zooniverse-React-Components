"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dataUriToBlob = _interopRequireDefault(require("data-uri-to-blob"));
var _fileButton = _interopRequireDefault(require("./file-button"));
var _thumbnail = _interopRequireDefault(require("./thumbnail"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var ImageSelector = /*#__PURE__*/function (_React$Component) {
  function ImageSelector(props) {
    var _this;
    _classCallCheck(this, ImageSelector);
    _this = _callSuper(this, ImageSelector, [props]);
    _this.state = {
      working: false
    };
    _this.cropImage = _this.cropImage.bind(_this);
    _this.reduceImage = _this.reduceImage.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  _inherits(ImageSelector, _React$Component);
  return _createClass(ImageSelector, [{
    key: "cropImage",
    value: function cropImage(srcImg, srcFile) {
      var _this2 = this;
      var canvas = document.createElement('canvas');
      canvas.width = srcImg.naturalWidth;
      canvas.height = srcImg.naturalHeight;
      if (!isNaN(this.props.ratio)) {
        var naturalRatio = srcImg.naturalWidth / srcImg.naturalHeight;
        if (naturalRatio - this.props.ratio < 0) {
          canvas.height = canvas.width / this.props.ratio;
        } else {
          canvas.width = canvas.height * this.props.ratio;
        }
      }
      var ctx = canvas.getContext('2d');
      ctx.drawImage(srcImg, (srcImg.naturalWidth - canvas.width) / -2, (srcImg.naturalHeight - canvas.height) / -2);
      var croppedImg = new Image();
      croppedImg.onload = function () {
        _this2.reduceImage(croppedImg, srcFile);
      };
      croppedImg.src = canvas.toDataURL();
    }
  }, {
    key: "reduceImage",
    value: function reduceImage(img, srcFile) {
      var _scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth * _scale;
      canvas.height = img.naturalHeight * _scale;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, canvas.width, canvas.height);
      var dataURL = canvas.toDataURL(srcFile.type);
      try {
        var size = dataURL.split(';base64,')[1].length * this.props.baseExpansion;
        if (size > this.props.maxSize && canvas.width * canvas.height > this.props.minArea) {
          // Keep trying until it's small enough.
          this.reduceImage(img, srcFile, _scale - this.props.reductionPerPass);
        } else {
          this.setState({
            working: false
          });
          img.title = srcFile.name;
          if (window.navigator) {
            this.props.onChange(this.props.resourceType, (0, _dataUriToBlob["default"])(dataURL), img);
          } else {
            this.props.onChange(this.props.resourceType, img);
          }
        }
      } catch (e) {
        this.setState({
          working: false
        });
        alert('Error reducing image. Try a smaller one.');
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this3 = this;
      // TODO: why is the proxy event in an array?
      if (e[0].target.files.length !== 0) {
        var _e$0$target$files = _slicedToArray(e[0].target.files, 1),
          file = _e$0$target$files[0];
        this.setState({
          working: true
        });
        var reader = new FileReader();
        reader.onload = function (event) {
          var img = new Image();
          img.onload = function () {
            _this3.cropImage(img, file);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // TODO: Add prop to switch from using the FileButton to a button
      // that triggers modal with a media selection view of already uploaded attached images.
      // This would be for reuse with projects when they get added to pfe-lab
      var uploaderClass = this.props.resourceSrc ? 'image-selector__uploader--without-border' : 'image-selector__uploader';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "image-selector",
        children: [this.props.label && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "image-selector__label",
          children: this.props.label
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: uploaderClass,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fileButton["default"], {
            accept: "image/*",
            onSelect: this.handleChange,
            rootStyle: {
              position: "absolute"
            },
            disabled: this.state.working
          }), !this.props.resourceSrc && !this.state.working && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "image-selector__placeholder",
            children: "Drop an image here"
          }), this.props.resourceSrc && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "image-selector__thumbnail",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_thumbnail["default"], {
              src: this.props.resourceSrc,
              width: 160
            }), this.props.allowDelete && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              "aria-label": "Delete",
              className: "image-selector__delete-button",
              disabled: this.props.deleting,
              onClick: this.props.onDelete.bind(null, this.props.resourceType),
              children: "\xD7"
            })]
          }), this.state.working && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "image-selector__loader",
            children: this.props.loading
          })]
        })]
      });
    }
  }]);
}(_react["default"].Component);
ImageSelector.propTypes = {
  allowDelete: _propTypes["default"].bool,
  baseExpansion: _propTypes["default"].number,
  deleting: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  loading: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  minArea: _propTypes["default"].number,
  maxSize: _propTypes["default"].number,
  onChange: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  ratio: _propTypes["default"].number,
  reductionPerPass: _propTypes["default"].number,
  resourceSrc: _propTypes["default"].string.isRequired,
  resourceType: _propTypes["default"].string
};
ImageSelector.defaultProps = {
  allowDelete: false,
  baseExpansion: 3 / 4,
  deleting: false,
  loading: 'Loading...',
  maxSize: Infinity,
  minArea: 300,
  onChange: function onChange() {},
  onDelete: function onDelete() {},
  reductionPerPass: 0.05,
  resourceSrc: '',
  ratio: NaN
};
var _default = exports["default"] = ImageSelector;