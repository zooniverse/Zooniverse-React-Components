import React from 'react';
import PropTypes from 'prop-types';
import MobileNavigationMenu from './mobile-navigation-menu';
import LoginButton from './login-button';
import OauthModal from './oauth-modal';

// TO DO: Add registration button if useOauth is false
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function SignedOutUserNavigation(props) {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(LoginButton, {
      toggleModal: props.toggleModal
    }), props.useOauth && /*#__PURE__*/_jsx(OauthModal, {
      login: props.login,
      loginWithGoogle: props.loginWithGoogle,
      onClose: props.toggleModal,
      showOauthModal: props.showOauthModal
    }), /*#__PURE__*/_jsx(MobileNavigationMenu, {
      adminNavLink: props.adminNavLink,
      mobileNavList: props.mobileNavList
    })]
  });
}
SignedOutUserNavigation.defaultProps = {
  login: () => {},
  loginWithGoogle: null,
  showOauthModal: false,
  toggleModal: () => {},
  useOauth: false
};
SignedOutUserNavigation.propTypes = {
  login: PropTypes.func,
  loginWithGoogle: PropTypes.func,
  showOauthModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  useOauth: PropTypes.bool
};