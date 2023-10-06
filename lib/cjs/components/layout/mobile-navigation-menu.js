"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileNavigationMenu = MobileNavigationMenu;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Anchor = _interopRequireDefault(require("grommet/components/Anchor"));
var _Menu = _interopRequireDefault(require("grommet/components/Menu"));
var _Menu2 = _interopRequireDefault(require("grommet/components/icons/base/Menu"));
var _withMobileView = _interopRequireDefault(require("./with-mobile-view"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MobileNavigationMenu(props) {
  function createKeyedAnchorItem(navItem, i) {
    return /*#__PURE__*/_react["default"].cloneElement(navItem, {
      key: "navItem-".concat(i)
    });
  }
  ;

  // TO DO: look into why the Grommet Menu component does not use the props defined for pad
  // Even if defined it still uses its default prop of none
  if (props.isMobile) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu["default"], {
      className: "mobile-navigation-menu",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu2["default"], {
        size: "xsmall"
      }),
      dropAlign: {
        right: 'right',
        top: 'top'
      },
      children: [props.mobileNavList.map(function (navItem, i) {
        return createKeyedAnchorItem(navItem, i);
      }), props.isAdmin && props.adminNavLink]
    });
  }
  return null;
}
MobileNavigationMenu.defaultProps = {
  adminNavLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/admin",
    label: "Admin"
  }),
  isAdmin: false,
  isMobile: false,
  mobileNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/",
    label: "Zooniverse"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
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
MobileNavigationMenu.propTypes = {
  adminNavLink: _propTypes["default"].node,
  isAdmin: _propTypes["default"].bool,
  isMobile: _propTypes["default"].bool,
  mobileNavList: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired
};
var _default = exports["default"] = (0, _withMobileView["default"])(MobileNavigationMenu);