import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import { jsx as _jsx } from "react/jsx-runtime";
export default function LoginButton(_ref) {
  var {
    className,
    label,
    login,
    plain,
    toggleModal
  } = _ref;
  return /*#__PURE__*/_jsx(Button, {
    type: "button",
    className: className,
    onClick: login || toggleModal,
    label: label,
    plain: plain
  });
}
;
LoginButton.defaultProps = {
  className: 'zoo-header__button--as-link',
  label: 'Sign in',
  login: null,
  plain: true,
  toggleModal: null
};
LoginButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  login: PropTypes.func,
  plain: PropTypes.bool,
  toggleModal: PropTypes.func
};