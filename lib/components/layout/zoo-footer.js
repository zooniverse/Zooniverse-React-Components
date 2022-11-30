"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Footer = _interopRequireDefault(require("grommet/components/Footer"));
var _Section = _interopRequireDefault(require("grommet/components/Section"));
var _Columns = _interopRequireDefault(require("grommet/components/Columns"));
var _Menu = _interopRequireDefault(require("grommet/components/Menu"));
var _Anchor = _interopRequireDefault(require("grommet/components/Anchor"));
var _Button = _interopRequireDefault(require("grommet/components/Button"));
var _Image = _interopRequireDefault(require("grommet/components/Image"));
var _SocialFacebookOption = _interopRequireDefault(require("grommet/components/icons/base/SocialFacebookOption"));
var _SocialTwitter = _interopRequireDefault(require("grommet/components/icons/base/SocialTwitter"));
var _SocialInstagram = _interopRequireDefault(require("grommet/components/icons/base/SocialInstagram"));
var _zooniverseLogotype = _interopRequireDefault(require("../zooniverse-logotype"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ZooFooter = function ZooFooter(props) {
  var createKeyedAnchorItem = function createKeyedAnchorItem(navItem, i) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: "navItem-".concat(i)
    }, navItem);
  };
  return /*#__PURE__*/_react["default"].createElement(_Footer["default"], {
    className: "footer",
    direction: "column",
    size: "large",
    primary: true,
    colorIndex: props.mainSectionColorIndex,
    pad: {
      horizontal: 'none',
      vertical: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Section["default"], {
    className: "footer__section",
    full: "horizontal",
    direction: "row",
    justify: "between",
    pad: {
      horizontal: 'large',
      vertical: 'medium'
    },
    margin: {
      horizontal: 'large',
      vertical: 'none'
    }
  }, props.homeLogoDiv, /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    direction: "row",
    inline: true,
    responsive: false
  }, props.socialNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  }))), /*#__PURE__*/_react["default"].createElement(_Section["default"], {
    pad: {
      horizontal: 'large',
      vertical: 'none'
    },
    full: "horizontal"
  }, /*#__PURE__*/_react["default"].createElement("hr", {
    className: "footer__divider"
  })), /*#__PURE__*/_react["default"].createElement(_Section["default"], {
    direction: "row",
    className: "footer__section",
    pad: {
      horizontal: 'large',
      vertical: 'medium'
    },
    margin: {
      top: 'none',
      bottom: 'large',
      left: 'none',
      right: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    maxCount: 6,
    masonry: true,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    margin: {
      horizontal: 'none',
      vertical: 'small'
    }
  }, props.projectNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  })), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    margin: {
      horizontal: 'none',
      vertical: 'small'
    }
  }, props.aboutNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  })), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    margin: {
      horizontal: 'none',
      vertical: 'small'
    }
  }, props.getInvolvedNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  })), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    margin: {
      horizontal: 'none',
      vertical: 'small'
    }
  }, props.talkNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  })), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    margin: {
      horizontal: 'none',
      vertical: 'small'
    }
  }, props.buildNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  })), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    margin: {
      horizontal: 'none',
      vertical: 'small'
    }
  }, props.newsNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  })))), /*#__PURE__*/_react["default"].createElement(_Section["default"], {
    align: "center",
    className: "footer__section--small",
    colorIndex: props.smallSectionColorIndex,
    direction: "row",
    full: "horizontal",
    pad: {
      horizontal: 'large',
      vertical: 'none'
    },
    justify: "between"
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    className: "footer__nav",
    direction: "row",
    inline: true,
    responsive: false
  }, props.policyNavList.map(function (navItem, i) {
    return createKeyedAnchorItem(navItem, i);
  })), /*#__PURE__*/_react["default"].createElement("div", null, props.adminContainer, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    className: "footer__easter-egg",
    src: "https://s3.amazonaws.com/zooniverse-static/assets/penguin.png",
    alt: ""
  }))));
};
ZooFooter.defaultProps = {
  aboutNavList: [/*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/about"
  }, "About"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/publications"
  }, "Publications"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/team"
  }, "Team"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/acknowledgements"
  }, "Acknowledgements"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/contact"
  }, "Contact"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/faq"
  }, "FAQ")],
  adminContainer: null,
  buildNavList: [/*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/lab"
  }, "Build a Project"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help"
  }, "Tutorial"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help/glossary"
  }, "Glossary"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help/lab-policies"
  }, "Policies"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/lab-best-practices/introduction"
  }, "Best Practices")],
  getInvolvedNavList: [/*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/get-involved"
  }, "Get Involved"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/get-involved/education"
  }, "Education"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/get-involved/call-for-projects"
  }, "Call for Projects"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/collections"
  }, "Collections")],
  homeLogoDiv: /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer__logo"
  }, /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    href: "https://www.zooniverse.org"
  }, /*#__PURE__*/_react["default"].createElement(_zooniverseLogotype["default"], null)), /*#__PURE__*/_react["default"].createElement("br", null), "People Powered Research"),
  mainSectionColorIndex: "light-1",
  newsNavList: [/*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-header",
    href: "#"
  }, "News"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://daily.zooniverse.org/"
  }, "Daily Zooniverse"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://blog.zooniverse.org/projects"
  }, "Blog")],
  policyNavList: [/*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/privacy"
  }, "Privacy Policy"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "http://jobs.zooniverse.org/"
  }, "Jobs"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://status.zooniverse.org/"
  }, "System Status"), /*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/security"
  }, "Security")],
  projectNavList: [/*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/projects"
  }, "Projects")],
  smallSectionColorIndex: "light-2",
  socialNavList: [
  /*#__PURE__*/
  // Button with an href behaves like an Anchor.
  // Buttons have to be used because Icons used in Anchors in a Box (or things that are sub-classes of a Box) that has its colorIndex set wiill be opinionated.
  // The styles for a Box in that case will supercede the colorIndex set on the Icon.
  // However there is a related bug: https://github.com/grommet/grommet/issues/1513
  _react["default"].createElement(_Button["default"], {
    className: "nav__list-item--social-media",
    href: "https://www.facebook.com/therealzooniverse",
    a11yTitle: "Facebook"
  }, /*#__PURE__*/_react["default"].createElement(_SocialFacebookOption["default"], {
    colorIndex: "brand",
    size: "small"
  }), " "), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "nav__list-item--social-media",
    href: "https://twitter.com/the_zooniverse",
    a11yTitle: "Twitter"
  }, /*#__PURE__*/_react["default"].createElement(_SocialTwitter["default"], {
    colorIndex: "brand",
    size: "small"
  })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "nav__list-item--social-media",
    href: "https://www.instagram.com/the.zooniverse/",
    a11yTitle: "Instagram"
  }, /*#__PURE__*/_react["default"].createElement(_SocialInstagram["default"], {
    colorIndex: "brand",
    size: "small"
  }))],
  talkNavList: [/*#__PURE__*/_react["default"].createElement(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/talk"
  }, "Talk")]
};
ZooFooter.propTypes = {
  aboutNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired,
  adminContainer: _propTypes["default"].node,
  buildNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired,
  getInvolvedNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired,
  homeLogoDiv: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  mainSectionColorIndex: _propTypes["default"].string,
  newsNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired,
  policyNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired,
  projectNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired,
  smallSectionColorIndex: _propTypes["default"].string,
  socialNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired,
  talkNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired
};
var _default = ZooFooter;
exports["default"] = _default;