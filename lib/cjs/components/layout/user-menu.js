"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserMenu;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Menu = _interopRequireDefault(require("grommet/components/Menu"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function UserMenu(props) {
  var createKeyedAnchorItem = function createKeyedAnchorItem(navItem, i) {
    return /*#__PURE__*/_react["default"].cloneElement(navItem, {
      key: "navItem-".concat(i)
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
    className: "zoo-header-menu",
    label: props.user.display_name,
    dropAlign: {
      right: 'right',
      top: 'top'
    },
    children: props.userMenuNavList.map(function (navItem, i) {
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
  user: _propTypes["default"].shape({
    display_name: _propTypes["default"].string
  }).isRequired,
  userMenuNavList: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])).isRequired
};