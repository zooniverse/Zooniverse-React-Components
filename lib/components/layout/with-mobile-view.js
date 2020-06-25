"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withMobileView;

var _react = _interopRequireDefault(require("react"));

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

var MAX_MOBILE_WIDTH = 1080;

function withMobileView(WrappedComponent) {
  var WithMobileView = /*#__PURE__*/function (_React$Component) {
    _inherits(WithMobileView, _React$Component);

    var _super = _createSuper(WithMobileView);

    function WithMobileView() {
      var _this;

      _classCallCheck(this, WithMobileView);

      _this = _super.call(this);
      _this.state = {
        isMobile: false
      };
      _this._resizeTimeout = NaN;
      _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));

      _this.handleResize();

      return _this;
    }

    _createClass(WithMobileView, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (window) window.addEventListener('resize', this.handleResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (window) window.removeEventListener('resize', this.handleResize);
        clearTimeout(this._resizeTimeout);
      }
    }, {
      key: "handleResize",
      value: function handleResize() {
        var _this2 = this;

        if (!isNaN(this._resizeTimeout)) {
          clearTimeout(this._resizeTimeout);
        }

        if (window) {
          this._resizeTimeout = setTimeout(function () {
            _this2.setState({
              isMobile: window.innerWidth <= MAX_MOBILE_WIDTH
            }, function () {
              _this2._resizeTimeout = NaN;
            });
          }, 100);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({
          isMobile: this.state.isMobile
        }, this.props));
      }
    }]);

    return WithMobileView;
  }(_react["default"].Component);

  WithMobileView.displayName = "WithMobileView(".concat(getDisplayName(WrappedComponent), ")");
  return WithMobileView;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}