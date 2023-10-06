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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var ImageSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageSelector, _React$Component);
  var _super = _createSuper(ImageSelector);
  function ImageSelector(props) {
    var _this;
    _classCallCheck(this, ImageSelector);
    _this = _super.call(this, props);
    _this.state = {
      working: false
    };
    _this.cropImage = _this.cropImage.bind(_assertThisInitialized(_this));
    _this.reduceImage = _this.reduceImage.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ImageSelector, [{
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
  return ImageSelector;
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