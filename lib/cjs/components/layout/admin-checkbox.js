"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CheckBox = _interopRequireDefault(require("grommet/components/CheckBox"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var AdminCheckbox = function AdminCheckbox(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckBox["default"], {
    checked: props.checked,
    id: "admin-checkbox",
    name: "admin-checkbox",
    label: props.label,
    onChange: props.onChange,
    toggle: true
  });
};
AdminCheckbox.defaultProps = {
  checked: false,
  label: 'Admin Mode',
  onChange: function onChange() {}
};
AdminCheckbox.propTypes = {
  checked: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
var _default = exports["default"] = AdminCheckbox;