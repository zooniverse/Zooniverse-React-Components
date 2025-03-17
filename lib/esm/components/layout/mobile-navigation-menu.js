import React from 'react';
import PropTypes from 'prop-types';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import withMobileView from './with-mobile-view';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function MobileNavigationMenu(props) {
  function createKeyedAnchorItem(navItem, i) {
    return /*#__PURE__*/React.cloneElement(navItem, {
      key: "navItem-".concat(i)
    });
  }
  ;

  // TO DO: look into why the Grommet Menu component does not use the props defined for pad
  // Even if defined it still uses its default prop of none
  if (props.isMobile) {
    return /*#__PURE__*/_jsxs(Menu, {
      className: "mobile-navigation-menu",
      icon: /*#__PURE__*/_jsx(MenuIcon, {
        size: "xsmall"
      }),
      dropAlign: {
        right: 'right',
        top: 'top'
      },
      children: [props.mobileNavList.map((navItem, i) => {
        return createKeyedAnchorItem(navItem, i);
      }), props.isAdmin && props.adminNavLink]
    });
  }
  return null;
}
MobileNavigationMenu.defaultProps = {
  adminNavLink: /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/admin",
    label: "Admin"
  }),
  isAdmin: false,
  isMobile: false,
  mobileNavList: [/*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/",
    label: "Zooniverse"
  }), /*#__PURE__*/_jsx(Anchor, {
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
MobileNavigationMenu.propTypes = {
  adminNavLink: PropTypes.node,
  isAdmin: PropTypes.bool,
  isMobile: PropTypes.bool,
  mobileNavList: PropTypes.arrayOf(PropTypes.node).isRequired
};
export default withMobileView(MobileNavigationMenu);