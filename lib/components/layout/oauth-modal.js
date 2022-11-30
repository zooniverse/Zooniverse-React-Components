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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function OauthModal(props) {
  if (props.showOauthModal) {
    return /*#__PURE__*/_react["default"].createElement(_Layer["default"], {
      className: "oauth-modal",
      align: "center",
      closer: true,
      onClose: props.onClose
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      pad: "medium",
      justify: "between"
    }, /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
      tag: "h2"
    }, props.heading), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      className: "oauth-modal__button--panoptes",
      label: props.signInLabel,
      onClick: props.login,
      primary: true
    }), props.loginWithGoogle && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      className: "oauth-modal__button--google",
      onClick: props.loginWithGoogle,
      plain: true
    }, /*#__PURE__*/_react["default"].createElement(_oauthGoogleIcon["default"], {
      className: "oauth-modal__google-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "oauth-modal__google-label"
    }, props.signInGoogleLabel))));
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