function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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