function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var IMAGE_EXTENSIONS = ['gif', 'jpeg', 'jpg', 'png', 'svg'];
var VIDEO_EXTENSIONS = ['mp4'];
export default class MediaCard extends React.Component {
  render() {
    var srcExtension = this.props.src.split('.').pop().toLowerCase();
    var mediaRender;
    if (IMAGE_EXTENSIONS.indexOf(srcExtension) >= 0) {
      mediaRender = /*#__PURE__*/_jsx("img", {
        className: "media-card-media",
        src: this.props.src
      });
    } else if (VIDEO_EXTENSIONS.indexOf(srcExtension) >= 0) {
      mediaRender = /*#__PURE__*/_jsx("video", {
        className: "media-card-media",
        src: this.props.src,
        children: /*#__PURE__*/_jsx("p", {
          children: "Your browser does not support this video format."
        })
      });
    } else {
      console.warn("Not sure how to render ".concat(this.props.src));
      return null;
    }
    return /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({}, this.props), {}, {
      className: "media-card ".concat(this.props.className).trim(),
      children: [this.props.src && /*#__PURE__*/_jsx("div", {
        className: "media-card-header",
        children: mediaRender
      }), this.props.children && /*#__PURE__*/_jsx("div", {
        className: "media-card-content",
        children: this.props.children
      })]
    }));
  }
}
MediaCard.propTypes = {
  src: PropTypes.string
};
MediaCard.defaultProps = {
  src: ''
};