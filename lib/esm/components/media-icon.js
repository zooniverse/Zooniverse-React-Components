import React from 'react';
import PropTypes from 'prop-types';
import TriggeredModalForm from 'modal-form/triggered';
import Thumbnail from './thumbnail';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default class MediaIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.setState({
      deleting: true
    });
    this.props.resource.delete().then(() => {
      this.setState({
        deleting: false
      });
      this.props.onDelete(this.props.resource);
    });
  }

  /* eslint-disable max-len */
  render() {
    var mediaIconStyle = this.state.deleting ? {
      opacity: 0.5
    } : null;
    return /*#__PURE__*/_jsxs("div", {
      className: "media-icon",
      style: mediaIconStyle,
      children: [/*#__PURE__*/_jsxs("div", {
        className: "media-icon-thumbnail-container",
        children: [/*#__PURE__*/_jsx(TriggeredModalForm, {
          trigger: /*#__PURE__*/_jsx(Thumbnail, {
            className: "media-icon-thumbnail",
            src: this.props.resource.src,
            height: this.props.height,
            style: {
              position: 'relative'
            }
          }),
          children: /*#__PURE__*/_jsx("div", {
            className: "content-container",
            children: /*#__PURE__*/_jsx("img", {
              alt: "",
              src: this.props.resource.src,
              style: {
                maxHeight: '80vh',
                maxWidth: '60vw'
              }
            })
          })
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          className: "media-icon-delete-button",
          disabled: this.state.deleting,
          onClick: this.handleDelete,
          children: "\xD7"
        })]
      }), this.props.resource.metadata && /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("span", {
          className: "media-icon-label",
          style: {
            position: 'relative'
          },
          children: this.props.resource.metadata.filename
        }), /*#__PURE__*/_jsx("textarea", {
          className: "media-icon-markdown",
          value: "![".concat(this.props.resource.metadata.filename, "(").concat(this.props.resource.src, ")"),
          readOnly: true,
          style: {
            position: 'relative'
          },
          onFocus: e => e.target.setSelectionRange(0, e.target.value.length)
        })]
      })]
    });
  }
  /* eslint-enable */
}

MediaIcon.defaultProps = {
  height: 80,
  onDelete: () => {},
  resource: {}
};
MediaIcon.propTypes = {
  height: PropTypes.number,
  onDelete: PropTypes.func,
  resource: PropTypes.shape({
    delete: PropTypes.func,
    id: PropTypes.string,
    metadata: PropTypes.object,
    src: PropTypes.string
  }).isRequired
};