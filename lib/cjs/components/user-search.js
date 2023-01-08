"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _apiClient = _interopRequireDefault(require("panoptes-client/lib/api-client"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var delayBy = function delayBy(timeout, fn) {
  return setTimeout(fn, timeout);
};
var UserSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(UserSearch, _React$Component);
  var _super = _createSuper(UserSearch);
  function UserSearch(props) {
    var _this;
    _classCallCheck(this, UserSearch);
    _this = _super.call(this, props);
    _this.queryTimeout = NaN;
    _this.state = {
      users: []
    };
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.searchUsers = _this.searchUsers.bind(_assertThisInitialized(_this));
    _this.value = _this.value.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(UserSearch, [{
    key: "onChange",
    value: function onChange(users) {
      this.setState({
        users: users
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setState({
        users: []
      });
    }
  }, {
    key: "value",
    value: function value() {
      return this.state.users;
    }
  }, {
    key: "searchUsers",
    value: function searchUsers(value) {
      var _this2 = this;
      clearTimeout(this.queryTimeout);
      var onSearch = this.props.onSearch;
      if (value === '') {
        return Promise.resolve({
          options: []
        });
      }
      return new Promise(function (resolve) {
        _this2.queryTimeout = delayBy(_this2.props.debounce, function () {
          if (onSearch) {
            onSearch();
          }
          return _apiClient["default"].type('users').get({
            search: value,
            page_size: 10
          }).then(function (users) {
            var results = [];
            users.forEach(function (user) {
              results.push({
                value: user.id,
                label: "@".concat(user.login, ": ").concat(user.display_name)
              });
            });
            return results;
          }).then(function (options) {
            return resolve({
              options: options
            });
          })["catch"](function (err) {
            console.error(err);
          });
        });
        return _this2.queryTimeout;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelect["default"].Async, {
        multi: this.props.multi,
        name: "userids",
        value: this.state.users,
        onChange: this.onChange,
        placeholder: this.props.placeholder,
        searchPromptText: this.props.searchPromptText,
        className: this.props.className,
        closeAfterClick: true,
        matchProp: 'label',
        loadOptions: this.searchUsers
      });
    }
  }]);
  return UserSearch;
}(_react["default"].Component);
exports["default"] = UserSearch;
UserSearch.propTypes = {
  className: _propTypes["default"].string,
  debounce: _propTypes["default"].number,
  multi: _propTypes["default"].bool,
  onSearch: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  searchPromptText: _propTypes["default"].string
};
UserSearch.defaultProps = {
  className: 'search',
  debounce: 200,
  multi: true,
  onSearch: null,
  placeholder: 'Username:',
  searchPromptText: 'Type to search Users'
};