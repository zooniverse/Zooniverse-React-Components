import React from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var nextID = 0;
function generateNextID() {
  nextID += 1;
  return nextID;
}
var ZooniverseLogo = _ref => {
  var {
    className,
    width,
    height,
    title,
    style
  } = _ref;
  var logoID = generateNextID();
  return /*#__PURE__*/_jsxs("svg", {
    role: "img",
    viewBox: "0 0 100 100",
    width: width,
    height: height,
    "aria-labelledby": "zooniverse-logo_".concat(logoID),
    style: style,
    className: className,
    children: [/*#__PURE__*/_jsx("title", {
      id: "zooniverse-logo_".concat(logoID),
      children: title
    }), /*#__PURE__*/_jsxs("g", {
      fill: "currentColor",
      stroke: "none",
      transform: "translate(50, 50)",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M 0 -45 A 45 45 0 0 1 0 45 A 45 45 0 0 1 0 -45 Z M 0 -30 A 30 30 0 0 0 0 30 A 30 30 0 0 0 0 -30 Z"
      }), /*#__PURE__*/_jsx("path", {
        d: "M 0 -14 A 14 14 0 0 1 0 14 A 14 14 0 0 1 0 -14 Z"
      }), /*#__PURE__*/_jsx("ellipse", {
        cx: "0",
        cy: "0",
        rx: "6",
        ry: "65",
        transform: "rotate(50)"
      })]
    })]
  });
};
ZooniverseLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string
};
ZooniverseLogo.defaultProps = {
  width: '1em',
  height: '1em',
  title: 'Zooniverse Logo',
  style: {},
  className: ''
};
export default ZooniverseLogo;