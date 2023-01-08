function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
export default class DragAndDropTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canDrop: false
    };
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }
  handleDragEnter(e) {
    e.preventDefault();
    this.setState({
      canDrop: true
    });
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this.props.onDragEnter(args);
  }
  handleDragOver(e) {
    e.preventDefault();
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    this.props.onDragOver(args);
  }
  handleDragLeave(e) {
    e.preventDefault();
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    this.props.onDragLeave(args);
  }
  handleDrop(e) {
    e.preventDefault();
    this.setState({
      canDrop: false
    });
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    this.props.onDrop(args);
  }
  render() {
    var className = "file-drop-target ".concat(this.props.className).trim();
    return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({}, this.props), {}, {
      className: className,
      onDragEnter: this.handleDragEnter,
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop,
      "data-can-drop": this.state.canDrop || null,
      children: this.props.children
    }));
  }
}
DragAndDropTarget.defaultProps = {
  children: null,
  className: '',
  onDragEnter: () => {},
  onDragOver: () => {},
  onDragLeave: () => {},
  onDrop: () => {}
};
DragAndDropTarget.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func
};