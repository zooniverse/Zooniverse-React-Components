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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function SignedInUserNavigation(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_userNavigation["default"], {
    messagesLabel: props.messagesLabel,
    messagesLink: props.messagesLink,
    notificationsLabel: props.notificationsLabel,
    notificationsLink: props.notificationsLink
  }), /*#__PURE__*/_react["default"].createElement(_userMenu["default"], {
    user: props.user,
    userMenuNavList: props.userMenuNavList
  }), /*#__PURE__*/_react["default"].createElement(_mobileNavigationMenu["default"], {
    adminNavLink: props.adminNavLink,
    isAdmin: props.isAdmin,
    mobileNavList: props.mobileNavList
  }));
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
var _default = SignedInUserNavigation;
exports["default"] = _default;