"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var nextID = 0;
function generateNextID() {
  nextID += 1;
  return nextID;
}
var ZooniverseLogo = function ZooniverseLogo(_ref) {
  var className = _ref.className,
    width = _ref.width,
    height = _ref.height,
    title = _ref.title,
    style = _ref.style;
  var logoID = generateNextID();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    role: "img",
    viewBox: "0 0 100 100",
    width: width,
    height: height,
    "aria-labelledby": "zooniverse-logo_".concat(logoID),
    style: style,
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
      id: "zooniverse-logo_".concat(logoID),
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      fill: "currentColor",
      stroke: "none",
      transform: "translate(50, 50)",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0 -45 A 45 45 0 0 1 0 45 A 45 45 0 0 1 0 -45 Z M 0 -30 A 30 30 0 0 0 0 30 A 30 30 0 0 0 0 -30 Z"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0 -14 A 14 14 0 0 1 0 14 A 14 14 0 0 1 0 -14 Z"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ellipse", {
        cx: "0",
        cy: "0",
        rx: "6",
        ry: "65",
        transform: "rotate(50)"
      })]
    })]
  });
};
ZooniverseLogo.propTypes = {
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  title: _propTypes["default"].string,
  style: _propTypes["default"].objectOf(_propTypes["default"].string),
  className: _propTypes["default"].string
};
ZooniverseLogo.defaultProps = {
  width: '1em',
  height: '1em',
  title: 'Zooniverse Logo',
  style: {},
  className: ''
};
var _default = ZooniverseLogo;
exports["default"] = _default;