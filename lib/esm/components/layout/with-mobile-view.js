function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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