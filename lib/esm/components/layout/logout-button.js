import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import { jsx as _jsx } from "react/jsx-runtime";
var LogoutButton = _ref => {
  var {
    className,
    label,
    logout
  } = _ref;
  return /*#__PURE__*/_jsx(Button, {
    className: className,
    type: "button",
    onClick: logout,
    label: label,
    plain: true
  });
};
LogoutButton.defaultProps = {
  className: 'zoo-header__button--as-link',
  label: 'Logout',
  logout: () => {}
};
LogoutButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  logout: PropTypes.func.isRequired
};
export default LogoutButton;