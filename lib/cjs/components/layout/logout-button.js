"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("grommet/components/Button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LogoutButton = function LogoutButton(_ref) {
  var className = _ref.className,
    label = _ref.label,
    logout = _ref.logout;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
    className: className,
    type: "button",
    onClick: logout,
    label: label,
    plain: true
  });
};
LogoutButton.defaultProps = {
  className: 'zoo-header__button--as-link',
  label: 'Logout',
  logout: function logout() {}
};
LogoutButton.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  logout: _propTypes["default"].func.isRequired
};
var _default = LogoutButton;
exports["default"] = _default;