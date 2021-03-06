"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var DisplayNameSlugEditor = /*#__PURE__*/function (_Component) {
  _inherits(DisplayNameSlugEditor, _Component);

  var _super = _createSuper(DisplayNameSlugEditor);

  function DisplayNameSlugEditor(props) {
    var _this;

    _classCallCheck(this, DisplayNameSlugEditor);

    _this = _super.call(this, props);
    _this.getResourceUrl = _this.getResourceUrl.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.undoNameChange = _this.undoNameChange.bind(_assertThisInitialized(_this));
    _this.warnURLChange = _this.warnURLChange.bind(_assertThisInitialized(_this));
    _this.state = {
      value: '',
      url: null,
      warn: false
    };
    return _this;
  }

  _createClass(DisplayNameSlugEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getResourceUrl(this.props.resource);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.resource !== nextProps.resource) {
        this.getResourceUrl(nextProps.resource);
      }
    }
  }, {
    key: "getResourceUrl",
    value: function getResourceUrl(resource) {
      var resourceType = this.props.resourceType;
      this.setState({
        value: resource.display_name,
        url: "/".concat(resourceType, "s/").concat(resource.slug)
      });
    }
  }, {
    key: "value",
    value: function value() {
      return this.state.value;
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var value = event.target.value;
      this.setState({
        value: value
      });
      this.warnURLChange(this.props.resource, value);
    }
  }, {
    key: "undoNameChange",
    value: function undoNameChange() {
      this.setState({
        value: this.props.resource.display_name,
        warn: false
      });
    }
  }, {
    key: "warnURLChange",
    value: function warnURLChange(resource, displayNameInputValue) {
      var warn = resource.display_name !== displayNameInputValue && (resource.slug.match(/(untitled-project)/i) === null || resource.slug.match(/(untitled-organization)/i) === null);

      if (warn) {
        this.setState({
          warn: warn
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var state = this.state,
          undoNameChange = this.undoNameChange;
      var _this$props = this.props,
          resource = _this$props.resource,
          resourceType = _this$props.resourceType;
      return /*#__PURE__*/_react["default"].createElement("p", {
        className: "".concat(this.props.className)
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "display_name"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(this.props.className, "__form-label")
      }, "Name"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "".concat(this.props.className, "__form-input"),
        disabled: resource.live || !!resource.listed_at,
        id: "display_name",
        name: "display_name",
        onChange: this.handleInputChange,
        ref: function ref(node) {
          _this2.input = node;
        },
        value: this.state.value
      })), state.warn ? /*#__PURE__*/_react["default"].createElement("small", {
        className: "".concat(this.props.className, "__form-help")
      }, "You\u2019re changing the url of your ", resourceType, ". Users with bookmarks and links in Talk will no longer work.", ' ', /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: undoNameChange
      }, "Cancel"), ' ') : null, state.url ? /*#__PURE__*/_react["default"].createElement("small", {
        className: "".concat(this.props.className, "__form-help")
      }, resource.live || !!resource.listed_at ? "You cannot change a live ".concat(resourceType, "'s name.") : "The ".concat(resourceType, " name is the first thing people will see about the ").concat(resourceType, ", and it will show up in the ").concat(resourceType, " URL. Try to keep it short and sweet."), ' ', "Your ", resourceType, "\u2019s URL is", ' ', /*#__PURE__*/_react["default"].createElement("a", {
        href: this.props.origin + state.url
      }, this.props.origin + state.url)) : null);
    }
  }]);

  return DisplayNameSlugEditor;
}(_react.Component);

DisplayNameSlugEditor.propTypes = {
  className: _propTypes["default"].string,
  origin: _propTypes["default"].string,
  resource: _propTypes["default"].shape({
    display_name: _propTypes["default"].string,
    listed_at: _propTypes["default"].string,
    live: _propTypes["default"].bool
  }),
  resourceType: _propTypes["default"].string
};
DisplayNameSlugEditor.defaultProps = {
  className: 'slug-editor',
  origin: window.location.origin,
  resource: {},
  resourceType: ''
};
var _default = DisplayNameSlugEditor;
exports["default"] = _default;