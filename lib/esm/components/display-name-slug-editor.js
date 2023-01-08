import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class DisplayNameSlugEditor extends Component {
  constructor(props) {
    super(props);
    this.getResourceUrl = this.getResourceUrl.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.undoNameChange = this.undoNameChange.bind(this);
    this.warnURLChange = this.warnURLChange.bind(this);
    this.state = {
      value: '',
      url: null,
      warn: false
    };
  }
  componentDidMount() {
    this.getResourceUrl(this.props.resource);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.resource !== nextProps.resource) {
      this.getResourceUrl(nextProps.resource);
    }
  }
  getResourceUrl(resource) {
    var {
      resourceType
    } = this.props;
    this.setState({
      value: resource.display_name,
      url: "/".concat(resourceType, "s/").concat(resource.slug)
    });
  }
  value() {
    return this.state.value;
  }
  handleInputChange(event) {
    var value = event.target.value;
    this.setState({
      value
    });
    this.warnURLChange(this.props.resource, value);
  }
  undoNameChange() {
    this.setState({
      value: this.props.resource.display_name,
      warn: false
    });
  }
  warnURLChange(resource, displayNameInputValue) {
    var warn = resource.display_name !== displayNameInputValue && (resource.slug.match(/(untitled-project)/i) === null || resource.slug.match(/(untitled-organization)/i) === null);
    if (warn) {
      this.setState({
        warn
      });
    }
  }
  render() {
    var {
      state,
      undoNameChange
    } = this;
    var {
      resource,
      resourceType
    } = this.props;
    return /*#__PURE__*/_jsxs("p", {
      className: "".concat(this.props.className),
      children: [/*#__PURE__*/_jsxs("label", {
        htmlFor: "display_name",
        children: [/*#__PURE__*/_jsx("span", {
          className: "".concat(this.props.className, "__form-label"),
          children: "Name"
        }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
          type: "text",
          className: "".concat(this.props.className, "__form-input"),
          disabled: resource.live || !!resource.listed_at,
          id: "display_name",
          name: "display_name",
          onChange: this.handleInputChange,
          ref: node => {
            this.input = node;
          },
          value: this.state.value
        })]
      }), state.warn ? /*#__PURE__*/_jsxs("small", {
        className: "".concat(this.props.className, "__form-help"),
        children: ["You\u2019re changing the url of your ", resourceType, ". Users with bookmarks and links in Talk will no longer work.", ' ', /*#__PURE__*/_jsx("button", {
          type: "button",
          onClick: undoNameChange,
          children: "Cancel"
        }), ' ']
      }) : null, state.url ? /*#__PURE__*/_jsxs("small", {
        className: "".concat(this.props.className, "__form-help"),
        children: [resource.live || !!resource.listed_at ? "You cannot change a live ".concat(resourceType, "'s name.") : "The ".concat(resourceType, " name is the first thing people will see about the ").concat(resourceType, ", and it will show up in the ").concat(resourceType, " URL. Try to keep it short and sweet."), ' ', "Your ", resourceType, "\u2019s URL is", ' ', /*#__PURE__*/_jsx("a", {
          href: this.props.origin + state.url,
          children: this.props.origin + state.url
        })]
      }) : null]
    });
  }
}
DisplayNameSlugEditor.propTypes = {
  className: PropTypes.string,
  origin: PropTypes.string,
  resource: PropTypes.shape({
    display_name: PropTypes.string,
    listed_at: PropTypes.string,
    live: PropTypes.bool
  }),
  resourceType: PropTypes.string
};
DisplayNameSlugEditor.defaultProps = {
  className: 'slug-editor',
  origin: window.location.origin,
  resource: {},
  resourceType: ''
};
export default DisplayNameSlugEditor;