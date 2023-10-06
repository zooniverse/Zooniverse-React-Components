"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZooHeader = ZooHeader;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Anchor = _interopRequireDefault(require("grommet/components/Anchor"));
var _Header = _interopRequireDefault(require("grommet/components/Header"));
var _Menu = _interopRequireDefault(require("grommet/components/Menu"));
var _withMobileView = _interopRequireDefault(require("./with-mobile-view"));
var _zooniverseLogo = _interopRequireDefault(require("../zooniverse-logo"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ZooHeader(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Header["default"], {
    justify: "between",
    className: "zoo-header",
    direction: "row",
    size: "small",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu["default"], {
      align: "center",
      direction: "row",
      size: "small",
      responsive: false,
      inline: true,
      children: [props.logoHomeLink && props.logoHomeLink, !props.isMobile && /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        className: "zoo-header__nav-list",
        children: [props.mainHeaderNavList.map(function (navItem, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            className: "zoo-header__nav-list-item zoo-header__nav-list-item--main",
            children: navItem
          }, "navItem-".concat(i));
        }), props.isAdmin && /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          className: "zoo-header__nav-list-item zoo-header__nav-list-item--main",
          children: props.adminNavLink
        })]
      })]
    }), props.authContainer && props.authContainer]
  });
}
ZooHeader.defaultProps = {
  adminNavLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/admin",
    label: "Admin"
  }),
  authContainer: null,
  isAdmin: false,
  logoHomeLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link",
    href: "http://www.zooniverse.org",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_zooniverseLogo["default"], {
      height: "1.25em",
      width: "1.25em"
    })
  }),
  mainHeaderNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/projects",
    label: "Projects"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/about",
    label: "About"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/get-involved",
    label: "Get Involved"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/talk",
    label: "Talk"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/lab",
    label: "Build A Project"
  })]
};
ZooHeader.propTypes = {
  adminNavLink: _propTypes["default"].node,
  authContainer: _propTypes["default"].node,
  isAdmin: _propTypes["default"].bool,
  logoHomeLink: _propTypes["default"].node.isRequired,
  mainHeaderNavList: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired
};
var _default = exports["default"] = (0, _withMobileView["default"])(ZooHeader);