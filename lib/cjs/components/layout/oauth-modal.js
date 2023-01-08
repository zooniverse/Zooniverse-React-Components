"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OauthModal;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Box = _interopRequireDefault(require("grommet/components/Box"));
var _Heading = _interopRequireDefault(require("grommet/components/Heading"));
var _Button = _interopRequireDefault(require("grommet/components/Button"));
var _Layer = _interopRequireDefault(require("grommet/components/Layer"));
var _oauthGoogleIcon = _interopRequireDefault(require("./oauth-google-icon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function OauthModal(props) {
  if (props.showOauthModal) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Layer["default"], {
      className: "oauth-modal",
      align: "center",
      closer: true,
      onClose: props.onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
        pad: "medium",
        justify: "between",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Heading["default"], {
          tag: "h2",
          children: props.heading
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          className: "oauth-modal__button--panoptes",
          label: props.signInLabel,
          onClick: props.login,
          primary: true
        }), props.loginWithGoogle && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
          className: "oauth-modal__button--google",
          onClick: props.loginWithGoogle,
          plain: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_oauthGoogleIcon["default"], {
            className: "oauth-modal__google-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "oauth-modal__google-label",
            children: props.signInGoogleLabel
          })]
        })]
      })
    });
  }
  return null;
}
;
OauthModal.defaultProps = {
  heading: 'Sign In',
  login: function login() {},
  loginWithGoogle: null,
  onClose: function onClose() {},
  showOauthModal: false,
  signInGoogleLabel: 'Sign in with Google',
  signInLabel: 'Sign in or Register'
};
OauthModal.propTypes = {
  heading: _propTypes["default"].string,
  login: _propTypes["default"].func,
  loginWithGoogle: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  showOauthModal: _propTypes["default"].bool,
  signInGoogleLabel: _propTypes["default"].string,
  signInLabel: _propTypes["default"].string
};