function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-restricted-globals */
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var MAX_MOBILE_WIDTH = 1080;
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
export default function withMobileView(WrappedComponent) {
  class WithMobileView extends React.Component {
    constructor() {
      super();
      this.state = {
        isMobile: false
      };
      this._resizeTimeout = NaN;
      this.handleResize = this.handleResize.bind(this);
      this.handleResize();
    }
    componentDidMount() {
      if (window) window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
      if (window) window.removeEventListener('resize', this.handleResize);
      clearTimeout(this._resizeTimeout);
    }
    handleResize() {
      if (!isNaN(this._resizeTimeout)) {
        clearTimeout(this._resizeTimeout);
      }
      if (window) {
        this._resizeTimeout = setTimeout(() => {
          this.setState({
            isMobile: window.innerWidth <= MAX_MOBILE_WIDTH
          }, () => {
            this._resizeTimeout = NaN;
          });
        }, 100);
      }
    }
    render() {
      var {
        isMobile
      } = this.state;
      return /*#__PURE__*/_jsx(WrappedComponent, _objectSpread({
        isMobile: isMobile
      }, this.props));
    }
  }
  WithMobileView.displayName = "WithMobileView(".concat(getDisplayName(WrappedComponent), ")");
  return WithMobileView;
}