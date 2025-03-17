"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var DisplayNameSlugEditor = /*#__PURE__*/function (_Component) {
  function DisplayNameSlugEditor(props) {
    var _this;
    _classCallCheck(this, DisplayNameSlugEditor);
    _this = _callSuper(this, DisplayNameSlugEditor, [props]);
    _this.getResourceUrl = _this.getResourceUrl.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.undoNameChange = _this.undoNameChange.bind(_this);
    _this.warnURLChange = _this.warnURLChange.bind(_this);
    _this.state = {
      value: '',
      url: null,
      warn: false
    };
    return _this;
  }
  _inherits(DisplayNameSlugEditor, _Component);
  return _createClass(DisplayNameSlugEditor, [{
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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "".concat(this.props.className),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          htmlFor: "display_name",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "".concat(this.props.className, "__form-label"),
            children: "Name"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
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
          })]
        }), state.warn ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("small", {
          className: "".concat(this.props.className, "__form-help"),
          children: ["You\u2019re changing the url of your ", resourceType, ". Users with bookmarks and links in Talk will no longer work.", ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: undoNameChange,
            children: "Cancel"
          }), ' ']
        }) : null, state.url ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("small", {
          className: "".concat(this.props.className, "__form-help"),
          children: [resource.live || !!resource.listed_at ? "You cannot change a live ".concat(resourceType, "'s name.") : "The ".concat(resourceType, " name is the first thing people will see about the ").concat(resourceType, ", and it will show up in the ").concat(resourceType, " URL. Try to keep it short and sweet."), ' ', "Your ", resourceType, "\u2019s URL is", ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: this.props.origin + state.url,
            children: this.props.origin + state.url
          })]
        }) : null]
      });
    }
  }]);
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
var _default = exports["default"] = DisplayNameSlugEditor;