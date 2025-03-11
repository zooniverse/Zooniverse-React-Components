"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserNavigation = UserNavigation;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Anchor = _interopRequireDefault(require("grommet/components/Anchor"));
var _Menu = _interopRequireDefault(require("grommet/components/Menu"));
var _withMobileView = _interopRequireDefault(require("./with-mobile-view"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function UserNavigation(props) {
  var messagesLabel = props.isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
    className: "fa fa-bell-o fa-fw",
    "aria-hidden": "true",
    "aria-label": props.messagesLabel
  }) : props.messagesLabel;
  var notificationsLabel = props.isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
    className: "fa fa-envelope-o fa-fw",
    "aria-hidden": "true",
    "aria-label": props.notificationsLabel
  }) : props.notificationsLabel;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu["default"], {
    className: "user-navigation",
    align: "center",
    direction: "row",
    size: "small",
    responsive: false,
    inline: true,
    children: [/*#__PURE__*/_react["default"].cloneElement(props.notificationsLink, {
      label: notificationsLabel
    }), /*#__PURE__*/_react["default"].cloneElement(props.messagesLink, {
      label: messagesLabel
    })]
  });
}
UserNavigation.defaultProps = {
  isMobile: false,
  messagesLabel: "Messages",
  notificationsLabel: "Notifications",
  messagesLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/inbox"
  }),
  notificationsLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/notifications"
  })
};
UserNavigation.propTypes = {
  isMobile: _propTypes["default"].bool,
  messagesLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]).isRequired,
  messagesLink: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]).isRequired,
  notificationsLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]).isRequired,
  notificationsLink: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]).isRequired
};
var _default = exports["default"] = (0, _withMobileView["default"])(UserNavigation);