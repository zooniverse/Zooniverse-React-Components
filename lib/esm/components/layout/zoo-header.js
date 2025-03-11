import React from 'react';
import PropTypes from 'prop-types';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import withMobileView from './with-mobile-view';
import ZooniverseLogo from '../zooniverse-logo';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ZooHeader(props) {
  return /*#__PURE__*/_jsxs(Header, {
    justify: "between",
    className: "zoo-header",
    direction: "row",
    size: "small",
    children: [/*#__PURE__*/_jsxs(Menu, {
      align: "center",
      direction: "row",
      size: "small",
      responsive: false,
      inline: true,
      children: [props.logoHomeLink && props.logoHomeLink, !props.isMobile && /*#__PURE__*/_jsxs("ul", {
        className: "zoo-header__nav-list",
        children: [props.mainHeaderNavList.map((navItem, i) => /*#__PURE__*/_jsx("li", {
          className: "zoo-header__nav-list-item zoo-header__nav-list-item--main",
          children: navItem
        }, "navItem-".concat(i))), props.isAdmin && /*#__PURE__*/_jsx("li", {
          className: "zoo-header__nav-list-item zoo-header__nav-list-item--main",
          children: props.adminNavLink
        })]
      })]
    }), props.authContainer && props.authContainer]
  });
}
ZooHeader.defaultProps = {
  adminNavLink: /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/admin",
    label: "Admin"
  }),
  authContainer: null,
  isAdmin: false,
  logoHomeLink: /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link",
    href: "http://www.zooniverse.org",
    children: /*#__PURE__*/_jsx(ZooniverseLogo, {
      height: "1.25em",
      width: "1.25em"
    })
  }),
  mainHeaderNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/projects",
    label: "Projects"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/about",
    label: "About"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/get-involved",
    label: "Get Involved"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/talk",
    label: "Talk"
  }), /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/lab",
    label: "Build A Project"
  })]
};
ZooHeader.propTypes = {
  adminNavLink: PropTypes.node,
  authContainer: PropTypes.node,
  isAdmin: PropTypes.bool,
  logoHomeLink: PropTypes.node.isRequired,
  mainHeaderNavList: PropTypes.arrayOf(PropTypes.node).isRequired
};
export default withMobileView(ZooHeader);