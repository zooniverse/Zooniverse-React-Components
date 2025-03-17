"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _apiClient = _interopRequireDefault(require("panoptes-client/lib/api-client"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var delayBy = function delayBy(timeout, fn) {
  return setTimeout(fn, timeout);
};
var UserSearch = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function UserSearch(props) {
    var _this;
    _classCallCheck(this, UserSearch);
    _this = _callSuper(this, UserSearch, [props]);
    _this.queryTimeout = NaN;
    _this.state = {
      users: []
    };
    _this.clear = _this.clear.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.searchUsers = _this.searchUsers.bind(_this);
    _this.value = _this.value.bind(_this);
    return _this;
  }
  _inherits(UserSearch, _React$Component);
  return _createClass(UserSearch, [{
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
}(_react["default"].Component);
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