function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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