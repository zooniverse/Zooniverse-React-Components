"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSwipe = _interopRequireDefault(require("react-swipe"));
var _animatedScrollto = _interopRequireDefault(require("animated-scrollto"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var StepThrough = /*#__PURE__*/function (_Component) {
  _inherits(StepThrough, _Component);
  var _super = _createSuper(StepThrough);
  function StepThrough(props) {
    var _this;
    _classCallCheck(this, StepThrough);
    _this = _super.call(this, props);
    _this.goPrevious = _this.goPrevious.bind(_assertThisInitialized(_this));
    _this.goNext = _this.goNext.bind(_assertThisInitialized(_this));
    _this.goTo = _this.goTo.bind(_assertThisInitialized(_this));
    _this.handleStep = _this.handleStep.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.renderControls = _this.renderControls.bind(_assertThisInitialized(_this));
    _this.state = {
      render: false,
      step: props.defaultStep
    };
    return _this;
  }
  _createClass(StepThrough, [{
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
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "step-through-controls"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          className: "step-through-direction step-through-previous",
          "aria-label": "Previous step",
          title: "Previous",
          disabled: this.state.step === 0,
          onClick: this.goPrevious
        }, "\u25C0"), /*#__PURE__*/_react["default"].createElement("span", {
          className: "step-through-pips"
        }, allSteps.map(function (thisStep) {
          return /*#__PURE__*/_react["default"].createElement("label", {
            key: thisStep,
            className: "step-through-pip",
            title: "Step ".concat(thisStep + 1)
          }, /*#__PURE__*/_react["default"].createElement("input", {
            type: "radio",
            className: "step-through-pip-input",
            "aria-label": "Step ".concat(thisStep + 1, " of ").concat(childrenCount),
            checked: thisStep === _this2.state.step,
            autoFocus: thisStep === _this2.state.step,
            onChange: _this2.goTo.bind(_this2, thisStep)
          }), /*#__PURE__*/_react["default"].createElement("span", {
            className: "step-through-pip-number"
          }, thisStep + 1));
        })), /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          className: "step-through-direction step-through-next",
          "aria-label": "Next step",
          title: "Next",
          disabled: this.state.step === childrenCount - 1,
          onClick: this.goNext
        }, "\u25B6"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
        _React$createElement;
      var childrenCount = _react["default"].Children.count(this.props.children);
      var swipeOptions = {
        startSlide: this.state.step,
        continuous: false,
        callback: this.handleStep.bind(this, childrenCount)
      };
      return /*#__PURE__*/_react["default"].createElement("div", (_React$createElement = {
        className: "step-through"
      }, _defineProperty(_React$createElement, "className", this.props.className), _defineProperty(_React$createElement, "style", this.props.style), _React$createElement), /*#__PURE__*/_react["default"].createElement(_reactSwipe["default"], {
        ref: function ref(el) {
          _this3.swiper = el;
        },
        className: "step-through-content",
        swipeOptions: swipeOptions
      }, this.props.children), this.renderControls(childrenCount));
    }
  }]);
  return StepThrough;
}(_react.Component);
StepThrough.propTypes = {
  defaultStep: _propTypes["default"].number
};
StepThrough.defaultProps = {
  defaultStep: 0
};
var _default = StepThrough;
exports["default"] = _default;