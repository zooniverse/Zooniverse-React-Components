import React from 'react';
import PropTypes from 'prop-types';
import MobileNavigationMenu from './mobile-navigation-menu';
import UserNavigation from './user-navigation';
import UserMenu from './user-menu';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function SignedInUserNavigation(props) {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(UserNavigation, {
      messagesLabel: props.messagesLabel,
      messagesLink: props.messagesLink,
      notificationsLabel: props.notificationsLabel,
      notificationsLink: props.notificationsLink
    }), /*#__PURE__*/_jsx(UserMenu, {
      user: props.user,
      userMenuNavList: props.userMenuNavList
    }), /*#__PURE__*/_jsx(MobileNavigationMenu, {
      adminNavLink: props.adminNavLink,
      isAdmin: props.isAdmin,
      mobileNavList: props.mobileNavList
    })]
  });
}
SignedInUserNavigation.defaultProps = {
  isAdmin: false,
  user: {}
};
SignedInUserNavigation.propTypes = {
  isAdmin: PropTypes.bool,
  messagesLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  messagesLink: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  notificationsLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  notificationsLink: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  user: PropTypes.object.isRequired,
  userMenuNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired
};
export default SignedInUserNavigation;