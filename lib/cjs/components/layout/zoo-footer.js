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
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ZooFooter = function ZooFooter(props) {
  var createKeyedAnchorItem = function createKeyedAnchorItem(navItem, i) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: navItem
    }, "navItem-".concat(i));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer["default"], {
    className: "footer",
    direction: "column",
    size: "large",
    primary: true,
    colorIndex: props.mainSectionColorIndex,
    pad: {
      horizontal: 'none',
      vertical: 'none'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Section["default"], {
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
      },
      children: [props.homeLogoDiv, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
        className: "footer__nav",
        direction: "row",
        inline: true,
        responsive: false,
        children: props.socialNavList.map(function (navItem, i) {
          return createKeyedAnchorItem(navItem, i);
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Section["default"], {
      pad: {
        horizontal: 'large',
        vertical: 'none'
      },
      full: "horizontal",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: "footer__divider"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Section["default"], {
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
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Columns["default"], {
        maxCount: 6,
        masonry: true,
        size: "small",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.projectNavList.map(function (navItem, i) {
            return createKeyedAnchorItem(navItem, i);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.aboutNavList.map(function (navItem, i) {
            return createKeyedAnchorItem(navItem, i);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.getInvolvedNavList.map(function (navItem, i) {
            return createKeyedAnchorItem(navItem, i);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.talkNavList.map(function (navItem, i) {
            return createKeyedAnchorItem(navItem, i);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.buildNavList.map(function (navItem, i) {
            return createKeyedAnchorItem(navItem, i);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.newsNavList.map(function (navItem, i) {
            return createKeyedAnchorItem(navItem, i);
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Section["default"], {
      align: "center",
      className: "footer__section--small",
      colorIndex: props.smallSectionColorIndex,
      direction: "row",
      full: "horizontal",
      pad: {
        horizontal: 'large',
        vertical: 'none'
      },
      justify: "between",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
        className: "footer__nav",
        direction: "row",
        inline: true,
        responsive: false,
        children: props.policyNavList.map(function (navItem, i) {
          return createKeyedAnchorItem(navItem, i);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [props.adminContainer, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
          className: "footer__easter-egg",
          src: "https://s3.amazonaws.com/zooniverse-static/assets/penguin.png",
          alt: ""
        })]
      })]
    })]
  });
};
ZooFooter.defaultProps = {
  aboutNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/about",
    children: "About"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/publications",
    children: "Publications"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/team",
    children: "Team"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/acknowledgements",
    children: "Acknowledgements"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/contact",
    children: "Contact"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/faq",
    children: "FAQ"
  })],
  adminContainer: null,
  buildNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/lab",
    children: "Build a Project"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help",
    children: "Tutorial"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help/glossary",
    children: "Glossary"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help/lab-policies",
    children: "Policies"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/lab-best-practices/introduction",
    children: "Best Practices"
  })],
  getInvolvedNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/get-involved",
    children: "Get Involved"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/get-involved/education",
    children: "Education"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/get-involved/call-for-projects",
    children: "Call for Projects"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/collections",
    children: "Collections"
  })],
  homeLogoDiv: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "footer__logo",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
      href: "https://www.zooniverse.org",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_zooniverseLogotype["default"], {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "People Powered Research"]
  }),
  mainSectionColorIndex: "light-1",
  newsNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-header",
    href: "#",
    children: "News"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://daily.zooniverse.org/",
    children: "Daily Zooniverse"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://blog.zooniverse.org/projects",
    children: "Blog"
  })],
  policyNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/privacy",
    children: "Privacy Policy"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "http://jobs.zooniverse.org/",
    children: "Jobs"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://status.zooniverse.org/",
    children: "System Status"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/security",
    children: "Security"
  })],
  projectNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/projects",
    children: "Projects"
  })],
  smallSectionColorIndex: "light-2",
  socialNavList: [
  /*#__PURE__*/
  // Button with an href behaves like an Anchor.
  // Buttons have to be used because Icons used in Anchors in a Box (or things that are sub-classes of a Box) that has its colorIndex set wiill be opinionated.
  // The styles for a Box in that case will supercede the colorIndex set on the Icon.
  // However there is a related bug: https://github.com/grommet/grommet/issues/1513
  (0, _jsxRuntime.jsxs)(_Button["default"], {
    className: "nav__list-item--social-media",
    href: "https://www.facebook.com/therealzooniverse",
    a11yTitle: "Facebook",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialFacebookOption["default"], {
      colorIndex: "brand",
      size: "small"
    }), " "]
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
    className: "nav__list-item--social-media",
    href: "https://twitter.com/the_zooniverse",
    a11yTitle: "Twitter",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialTwitter["default"], {
      colorIndex: "brand",
      size: "small"
    })
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
    className: "nav__list-item--social-media",
    href: "https://www.instagram.com/the.zooniverse/",
    a11yTitle: "Instagram",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialInstagram["default"], {
      colorIndex: "brand",
      size: "small"
    })
  })],
  talkNavList: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor["default"], {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/talk",
    children: "Talk"
  })]
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