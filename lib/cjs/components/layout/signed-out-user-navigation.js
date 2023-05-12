"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SignedOutUserNavigation;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mobileNavigationMenu = _interopRequireDefault(require("./mobile-navigation-menu"));
var _loginButton = _interopRequireDefault(require("./login-button"));
var _oauthModal = _interopRequireDefault(require("./oauth-modal"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// TO DO: Add registration button if useOauth is false
function SignedOutUserNavigation(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_loginButton["default"], {
      toggleModal: props.toggleModal
    }), props.useOauth && /*#__PURE__*/(0, _jsxRuntime.jsx)(_oauthModal["default"], {
      login: props.login,
      loginWithGoogle: props.loginWithGoogle,
      onClose: props.toggleModal,
      showOauthModal: props.showOauthModal
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_mobileNavigationMenu["default"], {
      adminNavLink: props.adminNavLink,
      mobileNavList: props.mobileNavList
    })]
  });
}
SignedOutUserNavigation.defaultProps = {
  login: function login() {},
  loginWithGoogle: null,
  showOauthModal: false,
  toggleModal: function toggleModal() {},
  useOauth: false
};
SignedOutUserNavigation.propTypes = {
  login: _propTypes["default"].func,
  loginWithGoogle: _propTypes["default"].func,
  showOauthModal: _propTypes["default"].bool,
  toggleModal: _propTypes["default"].func,
  useOauth: _propTypes["default"].bool
};