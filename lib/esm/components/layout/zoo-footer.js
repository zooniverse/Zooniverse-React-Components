import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import SocialFacebookOptionIcon from 'grommet/components/icons/base/SocialFacebookOption';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import ZooniverseLogotype from '../zooniverse-logotype';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ZooFooter = props => {
  var createKeyedAnchorItem = (navItem, i) => {
    return /*#__PURE__*/_jsx("span", {
      children: navItem
    }, "navItem-".concat(i));
  };
  return /*#__PURE__*/_jsxs(Footer, {
    className: "footer",
    direction: "column",
    size: "large",
    primary: true,
    colorIndex: props.mainSectionColorIndex,
    pad: {
      horizontal: 'none',
      vertical: 'none'
    },
    children: [/*#__PURE__*/_jsxs(Section, {
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
      children: [props.homeLogoDiv, /*#__PURE__*/_jsx(Menu, {
        className: "footer__nav",
        direction: "row",
        inline: true,
        responsive: false,
        children: props.socialNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
      })]
    }), /*#__PURE__*/_jsx(Section, {
      pad: {
        horizontal: 'large',
        vertical: 'none'
      },
      full: "horizontal",
      children: /*#__PURE__*/_jsx("hr", {
        className: "footer__divider"
      })
    }), /*#__PURE__*/_jsx(Section, {
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
      children: /*#__PURE__*/_jsxs(Columns, {
        maxCount: 6,
        masonry: true,
        size: "small",
        children: [/*#__PURE__*/_jsx(Menu, {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.projectNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
        }), /*#__PURE__*/_jsx(Menu, {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.aboutNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
        }), /*#__PURE__*/_jsx(Menu, {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.getInvolvedNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
        }), /*#__PURE__*/_jsx(Menu, {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.talkNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
        }), /*#__PURE__*/_jsx(Menu, {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.buildNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
        }), /*#__PURE__*/_jsx(Menu, {
          className: "footer__nav",
          margin: {
            horizontal: 'none',
            vertical: 'small'
          },
          children: props.newsNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
        })]
      })
    }), /*#__PURE__*/_jsxs(Section, {
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
      children: [/*#__PURE__*/_jsx(Menu, {
        className: "footer__nav",
        direction: "row",
        inline: true,
        responsive: false,
        children: props.policyNavList.map((navItem, i) => createKeyedAnchorItem(navItem, i))
      }), /*#__PURE__*/_jsxs("div", {
        children: [props.adminContainer, /*#__PURE__*/_jsx(Image, {
          className: "footer__easter-egg",
          src: "https://s3.amazonaws.com/zooniverse-static/assets/penguin.png",
          alt: ""
        })]
      })]
    })]
  });
};
ZooFooter.defaultProps = {
  aboutNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/about",
    children: "About"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/publications",
    children: "Publications"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/team",
    children: "Team"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/acknowledgements",
    children: "Acknowledgements"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/contact",
    children: "Contact"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/about/faq",
    children: "FAQ"
  })],
  adminContainer: null,
  buildNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/lab",
    children: "Build a Project"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help",
    children: "Tutorial"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help/glossary",
    children: "Glossary"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/help/lab-policies",
    children: "Policies"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/lab-best-practices/introduction",
    children: "Best Practices"
  })],
  getInvolvedNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/get-involved",
    children: "Get Involved"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/get-involved/education",
    children: "Education"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/get-involved/call-for-projects",
    children: "Call for Projects"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/collections",
    children: "Collections"
  })],
  homeLogoDiv: /*#__PURE__*/_jsxs("div", {
    className: "footer__logo",
    children: [/*#__PURE__*/_jsx(Anchor, {
      href: "https://www.zooniverse.org",
      children: /*#__PURE__*/_jsx(ZooniverseLogotype, {})
    }), /*#__PURE__*/_jsx("br", {}), "People Powered Research"]
  }),
  mainSectionColorIndex: "light-1",
  newsNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-header",
    href: "#",
    children: "News"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://daily.zooniverse.org/",
    children: "Daily Zooniverse"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://blog.zooniverse.org/projects",
    children: "Blog"
  })],
  policyNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/privacy",
    children: "Privacy Policy"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "http://jobs.zooniverse.org/",
    children: "Jobs"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://status.zooniverse.org/",
    children: "System Status"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-item",
    href: "https://www.zooniverse.org/security",
    children: "Security"
  })],
  projectNavList: [/*#__PURE__*/_jsx(Anchor, {
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
  _jsxs(Button, {
    className: "nav__list-item--social-media",
    href: "https://www.facebook.com/therealzooniverse",
    a11yTitle: "Facebook",
    children: [/*#__PURE__*/_jsx(SocialFacebookOptionIcon, {
      colorIndex: "brand",
      size: "small"
    }), " "]
  }), /*#__PURE__*/_jsx(Button, {
    className: "nav__list-item--social-media",
    href: "https://twitter.com/the_zooniverse",
    a11yTitle: "Twitter",
    children: /*#__PURE__*/_jsx(SocialTwitterIcon, {
      colorIndex: "brand",
      size: "small"
    })
  }), /*#__PURE__*/_jsx(Button, {
    className: "nav__list-item--social-media",
    href: "https://www.instagram.com/the.zooniverse/",
    a11yTitle: "Instagram",
    children: /*#__PURE__*/_jsx(SocialInstagramIcon, {
      colorIndex: "brand",
      size: "small"
    })
  })],
  talkNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "nav__list-header",
    href: "https://www.zooniverse.org/talk",
    children: "Talk"
  })]
};
ZooFooter.propTypes = {
  aboutNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
  adminContainer: PropTypes.node,
  buildNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
  getInvolvedNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
  homeLogoDiv: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  mainSectionColorIndex: PropTypes.string,
  newsNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
  policyNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
  projectNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
  smallSectionColorIndex: PropTypes.string,
  socialNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
  talkNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired
};
export default ZooFooter;