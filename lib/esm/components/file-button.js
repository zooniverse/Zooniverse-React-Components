function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
export default class FileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetting: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate() {
    if (this.state.resetting) {
      this.setState({
        resetting: false
      }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  handleChange() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    this.props.onSelect(args);
    this.setState({
      resetting: true
    });
  }
  render() {
    var input;
    if (this.state.resetting) {
      input = null;
    } else {
      var {
        accept,
        multiple,
        disabled
      } = this.props;
      var passedProps = {
        accept,
        multiple,
        disabled
      };
      input = /*#__PURE__*/_jsx("input", _objectSpread(_objectSpread({
        type: "file"
      }, passedProps), {}, {
        style: this.props.inputStyle,
        onChange: this.handleChange
      }));
    }
    var styles = Object.assign({}, this.props.rootStyle, this.props.style);
    var props = {
      'data-accept': this.props.accept,
      'data-disabled': this.props.disabled || null,
      'data-multiple': this.props.multiple || null,
      className: "file-button ".concat(this.props.className).trim(),
      style: styles
    };
    return /*#__PURE__*/React.createElement(this.props.tag, props, /*#__PURE__*/_jsx("span", {
      style: this.props.containerStyle,
      children: input
    }), this.props.children);
  }
}
FileButton.defaultProps = {
  accept: '*/*',
  children: null,
  className: '',
  containerStyle: {
    height: '100%',
    left: 0,
    opacity: 0.01,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  disabled: false,
  inputStyle: {
    cursor: 'pointer',
    height: '300%',
    left: '-100%',
    opacity: 0.01,
    position: 'absolute',
    top: '-100%',
    width: '300%'
  },
  multiple: false,
  onSelect: () => {},
  rootStyle: {
    position: 'relative'
  },
  style: {},
  tag: 'label'
};
FileButton.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  containerStyle: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  disabled: PropTypes.bool,
  inputStyle: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  multiple: PropTypes.bool,
  onSelect: PropTypes.func,
  rootStyle: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  style: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  tag: PropTypes.string
};