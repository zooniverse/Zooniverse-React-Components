function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
var MAX_THUMBNAIL_DIMENSION = 999;
export default class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false
    };
    this.handleError = this.handleError.bind(this);
  }
  getThumbnailSrc(_ref) {
    var {
      origin,
      width,
      height,
      src
    } = _ref;
    // eslint-disable-line class-methods-use-this
    var srcPath = src.split('//').pop();
    return "".concat(origin, "/").concat(width, "x").concat(height, "/").concat(srcPath);
  }
  handleError() {
    if (!this.state.failed) {
      this.setState({
        failed: true
      });
    }
  }
  render() {
    var src = this.state.failed ? this.props.src : this.getThumbnailSrc(this.props);
    var dimensions = {
      width: null,
      height: null
    };
    var style = {
      maxWidth: this.props.width,
      maxHeight: this.props.height
    };
    if (this.props.format === 'mp4') {
      return /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx("video", {
          width: "300",
          controls: true,
          children: /*#__PURE__*/_jsx("source", {
            src: this.props.src,
            type: "video/mp4"
          })
        })
      });
    }
    return /*#__PURE__*/_jsx("img", _objectSpread(_objectSpread(_objectSpread({
      alt: ""
    }, this.props), {}, {
      src: src
    }, dimensions), {}, {
      style: style,
      onError: this.handleError
    }));
  }
}
Thumbnail.defaultProps = {
  format: 'image',
  height: MAX_THUMBNAIL_DIMENSION,
  origin: 'https://thumbnails.zooniverse.org',
  src: '',
  width: MAX_THUMBNAIL_DIMENSION
};
Thumbnail.propTypes = {
  format: PropTypes.string,
  height: PropTypes.number,
  origin: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number
};