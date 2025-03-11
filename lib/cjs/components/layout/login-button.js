"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoginButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("grommet/components/Button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function LoginButton(_ref) {
  var className = _ref.className,
    label = _ref.label,
    login = _ref.login,
    plain = _ref.plain,
    toggleModal = _ref.toggleModal;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
    type: "button",
    className: className,
    onClick: login || toggleModal,
    label: label,
    plain: plain
  });
}
;
LoginButton.defaultProps = {
  className: 'zoo-header__button--as-link',
  label: 'Sign in',
  login: null,
  plain: true,
  toggleModal: null
};
LoginButton.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  login: _propTypes["default"].func,
  plain: _propTypes["default"].bool,
  toggleModal: _propTypes["default"].func
};