"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSwipe = _interopRequireDefault(require("react-swipe"));
var _animatedScrollto = _interopRequireDefault(require("animated-scrollto"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var StepThrough = /*#__PURE__*/function (_Component) {
  function StepThrough(props) {
    var _this;
    _classCallCheck(this, StepThrough);
    _this = _callSuper(this, StepThrough, [props]);
    _this.goPrevious = _this.goPrevious.bind(_this);
    _this.goNext = _this.goNext.bind(_this);
    _this.goTo = _this.goTo.bind(_this);
    _this.handleStep = _this.handleStep.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.renderControls = _this.renderControls.bind(_this);
    _this.state = {
      render: false,
      step: props.defaultStep
    };
    return _this;
  }
  _inherits(StepThrough, _Component);
  return _createClass(StepThrough, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
      this.swiper && this.swiper.swipe.setup();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "goPrevious",
    value: function goPrevious() {
      this.swiper.swipe.prev();
      this.handleScroll();
    }
  }, {
    key: "goNext",
    value: function goNext() {
      this.swiper.swipe.next();
      this.handleScroll();
    }
  }, {
    key: "goTo",
    value: function goTo(index) {
      this.swiper.swipe.slide(index);
      this.handleScroll();
    }
  }, {
    key: "handleStep",
    value: function handleStep(total, index) {
      this.setState({
        step: (index % total + total) % total
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      switch (e.which) {
        // left
        case 37:
          e.preventDefault();
          this.goPrevious();
          break;
        // right
        case 39:
          e.preventDefault();
          this.goNext();
          break;
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var reactSwipeNode = this.swiper;
      setTimeout((0, _animatedScrollto["default"])(reactSwipeNode, reactSwipeNode.offsetTop, 0), 500);
    }
  }, {
    key: "renderControls",
    value: function renderControls(childrenCount) {
      var _this2 = this;
      if (childrenCount === 1) {
        return null;
      } else {
        var allSteps = Array.from(Array(childrenCount).keys());
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-through-controls",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "step-through-direction step-through-previous",
            "aria-label": "Previous step",
            title: "Previous",
            disabled: this.state.step === 0,
            onClick: this.goPrevious,
            children: "\u25C0"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "step-through-pips",
            children: allSteps.map(function (thisStep) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                className: "step-through-pip",
                title: "Step ".concat(thisStep + 1),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "radio",
                  className: "step-through-pip-input",
                  "aria-label": "Step ".concat(thisStep + 1, " of ").concat(childrenCount),
                  checked: thisStep === _this2.state.step,
                  autoFocus: thisStep === _this2.state.step,
                  onChange: _this2.goTo.bind(_this2, thisStep)
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "step-through-pip-number",
                  children: thisStep + 1
                })]
              }, thisStep);
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "step-through-direction step-through-next",
            "aria-label": "Next step",
            title: "Next",
            disabled: this.state.step === childrenCount - 1,
            onClick: this.goNext,
            children: "\u25B6"
          })]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var childrenCount = _react["default"].Children.count(this.props.children);
      var swipeOptions = {
        startSlide: this.state.step,
        continuous: false,
        callback: this.handleStep.bind(this, childrenCount)
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _defineProperty(_defineProperty(_defineProperty({
        className: "step-through"
      }, "className", this.props.className), "style", this.props.style), "children", [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSwipe["default"], {
        ref: function ref(el) {
          _this3.swiper = el;
        },
        className: "step-through-content",
        swipeOptions: swipeOptions,
        children: this.props.children
      }), this.renderControls(childrenCount)]));
    }
  }]);
}(_react.Component);
StepThrough.propTypes = {
  defaultStep: _propTypes["default"].number
};
StepThrough.defaultProps = {
  defaultStep: 0
};
var _default = exports["default"] = StepThrough;