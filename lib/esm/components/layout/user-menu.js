import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'grommet/components/Menu';
import { jsx as _jsx } from "react/jsx-runtime";
export default function UserMenu(props) {
  var createKeyedAnchorItem = (navItem, i) => {
    return /*#__PURE__*/React.cloneElement(navItem, {
      key: "navItem-".concat(i)
    });
  };
  return /*#__PURE__*/_jsx(Menu, {
    className: "zoo-header-menu",
    label: props.user.display_name,
    dropAlign: {
      right: 'right',
      top: 'top'
    },
    children: props.userMenuNavList.map((navItem, i) => {
      return createKeyedAnchorItem(navItem, i);
    })
  });
}
;
UserMenu.defaultProps = {
  user: {
    display_name: ''
  }
};
UserMenu.propTypes = {
  user: PropTypes.shape({
    display_name: PropTypes.string
  }).isRequired,
  userMenuNavList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired
};