import React from 'react';
import PropTypes from 'prop-types';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import withMobileView from './with-mobile-view';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function UserNavigation(props) {
  var messagesLabel = props.isMobile ? /*#__PURE__*/_jsx("i", {
    className: "fa fa-bell-o fa-fw",
    "aria-hidden": "true",
    "aria-label": props.messagesLabel
  }) : props.messagesLabel;
  var notificationsLabel = props.isMobile ? /*#__PURE__*/_jsx("i", {
    className: "fa fa-envelope-o fa-fw",
    "aria-hidden": "true",
    "aria-label": props.notificationsLabel
  }) : props.notificationsLabel;
  return /*#__PURE__*/_jsxs(Menu, {
    className: "user-navigation",
    align: "center",
    direction: "row",
    size: "small",
    responsive: false,
    inline: true,
    children: [/*#__PURE__*/React.cloneElement(props.notificationsLink, {
      label: notificationsLabel
    }), /*#__PURE__*/React.cloneElement(props.messagesLink, {
      label: messagesLabel
    })]
  });
}
UserNavigation.defaultProps = {
  isMobile: false,
  messagesLabel: "Messages",
  notificationsLabel: "Notifications",
  messagesLink: /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/inbox"
  }),
  notificationsLink: /*#__PURE__*/_jsx(Anchor, {
    className: "zoo-header__link--small",
    href: "http://www.zooniverse.org/notifications"
  })
};
UserNavigation.propTypes = {
  isMobile: PropTypes.bool,
  messagesLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  messagesLink: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  notificationsLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  notificationsLink: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};
export default withMobileView(UserNavigation);