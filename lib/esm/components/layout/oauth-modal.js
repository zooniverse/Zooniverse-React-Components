import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';
import OauthGoogleIcon from './oauth-google-icon';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function OauthModal(props) {
  if (props.showOauthModal) {
    return /*#__PURE__*/_jsx(Layer, {
      className: "oauth-modal",
      align: "center",
      closer: true,
      onClose: props.onClose,
      children: /*#__PURE__*/_jsxs(Box, {
        pad: "medium",
        justify: "between",
        children: [/*#__PURE__*/_jsx(Heading, {
          tag: "h2",
          children: props.heading
        }), /*#__PURE__*/_jsx(Button, {
          className: "oauth-modal__button--panoptes",
          label: props.signInLabel,
          onClick: props.login,
          primary: true
        }), props.loginWithGoogle && /*#__PURE__*/_jsxs(Button, {
          className: "oauth-modal__button--google",
          onClick: props.loginWithGoogle,
          plain: true,
          children: [/*#__PURE__*/_jsx(OauthGoogleIcon, {
            className: "oauth-modal__google-icon"
          }), /*#__PURE__*/_jsx("span", {
            className: "oauth-modal__google-label",
            children: props.signInGoogleLabel
          })]
        })]
      })
    });
  }
  return null;
}
;
OauthModal.defaultProps = {
  heading: 'Sign In',
  login: () => {},
  loginWithGoogle: null,
  onClose: () => {},
  showOauthModal: false,
  signInGoogleLabel: 'Sign in with Google',
  signInLabel: 'Sign in or Register'
};
OauthModal.propTypes = {
  heading: PropTypes.string,
  login: PropTypes.func,
  loginWithGoogle: PropTypes.func,
  onClose: PropTypes.func,
  showOauthModal: PropTypes.bool,
  signInGoogleLabel: PropTypes.string,
  signInLabel: PropTypes.string
};