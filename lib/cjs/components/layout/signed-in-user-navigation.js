"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mobileNavigationMenu = _interopRequireDefault(require("./mobile-navigation-menu"));
var _userNavigation = _interopRequireDefault(require("./user-navigation"));
var _userMenu = _interopRequireDefault(require("./user-menu"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SignedInUserNavigation(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_userNavigation["default"], {
      messagesLabel: props.messagesLabel,
      messagesLink: props.messagesLink,
      notificationsLabel: props.notificationsLabel,
      notificationsLink: props.notificationsLink
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_userMenu["default"], {
      user: props.user,
      userMenuNavList: props.userMenuNavList
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_mobileNavigationMenu["default"], {
      adminNavLink: props.adminNavLink,
      isAdmin: props.isAdmin,
      mobileNavList: props.mobileNavList
    })]
  });
}
SignedInUserNavigation.defaultProps = {
  isAdmin: false,
  user: {}
};
SignedInUserNavigation.propTypes = {
  isAdmin: _propTypes["default"].bool,
  messagesLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  messagesLink: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  notificationsLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  notificationsLink: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  user: _propTypes["default"].object.isRequired,
  userMenuNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired
};
var _default = exports["default"] = SignedInUserNavigation;