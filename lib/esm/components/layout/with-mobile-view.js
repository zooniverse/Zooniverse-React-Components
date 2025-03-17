function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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