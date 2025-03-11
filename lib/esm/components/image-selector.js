import React from 'react';
import PropTypes from 'prop-types';
import toBlob from 'data-uri-to-blob';
import FileButton from './file-button';
import Thumbnail from './thumbnail';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
class ImageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
    this.cropImage = this.cropImage.bind(this);
    this.reduceImage = this.reduceImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  cropImage(srcImg, srcFile) {
    var canvas = document.createElement('canvas');
    canvas.width = srcImg.naturalWidth;
    canvas.height = srcImg.naturalHeight;
    if (!isNaN(this.props.ratio)) {
      var naturalRatio = srcImg.naturalWidth / srcImg.naturalHeight;
      if (naturalRatio - this.props.ratio < 0) {
        canvas.height = canvas.width / this.props.ratio;
      } else {
        canvas.width = canvas.height * this.props.ratio;
      }
    }
    var ctx = canvas.getContext('2d');
    ctx.drawImage(srcImg, (srcImg.naturalWidth - canvas.width) / -2, (srcImg.naturalHeight - canvas.height) / -2);
    var croppedImg = new Image();
    croppedImg.onload = () => {
      this.reduceImage(croppedImg, srcFile);
    };
    croppedImg.src = canvas.toDataURL();
  }
  reduceImage(img, srcFile) {
    var _scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth * _scale;
    canvas.height = img.naturalHeight * _scale;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL(srcFile.type);
    try {
      var size = dataURL.split(';base64,')[1].length * this.props.baseExpansion;
      if (size > this.props.maxSize && canvas.width * canvas.height > this.props.minArea) {
        // Keep trying until it's small enough.
        this.reduceImage(img, srcFile, _scale - this.props.reductionPerPass);
      } else {
        this.setState({
          working: false
        });
        img.title = srcFile.name;
        if (window.navigator) {
          this.props.onChange(this.props.resourceType, toBlob(dataURL), img);
        } else {
          this.props.onChange(this.props.resourceType, img);
        }
      }
    } catch (e) {
      this.setState({
        working: false
      });
      alert('Error reducing image. Try a smaller one.');
    }
  }
  handleChange(e) {
    // TODO: why is the proxy event in an array?
    if (e[0].target.files.length !== 0) {
      var [file] = e[0].target.files;
      this.setState({
        working: true
      });
      var reader = new FileReader();
      reader.onload = event => {
        var img = new Image();
        img.onload = () => {
          this.cropImage(img, file);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  render() {
    // TODO: Add prop to switch from using the FileButton to a button
    // that triggers modal with a media selection view of already uploaded attached images.
    // This would be for reuse with projects when they get added to pfe-lab
    var uploaderClass = this.props.resourceSrc ? 'image-selector__uploader--without-border' : 'image-selector__uploader';
    return /*#__PURE__*/_jsxs("div", {
      className: "image-selector",
      children: [this.props.label && /*#__PURE__*/_jsx("p", {
        className: "image-selector__label",
        children: this.props.label
      }), /*#__PURE__*/_jsxs("div", {
        className: uploaderClass,
        children: [/*#__PURE__*/_jsx(FileButton, {
          accept: "image/*",
          onSelect: this.handleChange,
          rootStyle: {
            position: "absolute"
          },
          disabled: this.state.working
        }), !this.props.resourceSrc && !this.state.working && /*#__PURE__*/_jsx("p", {
          className: "image-selector__placeholder",
          children: "Drop an image here"
        }), this.props.resourceSrc && /*#__PURE__*/_jsxs("div", {
          className: "image-selector__thumbnail",
          children: [/*#__PURE__*/_jsx(Thumbnail, {
            src: this.props.resourceSrc,
            width: 160
          }), this.props.allowDelete && /*#__PURE__*/_jsx("button", {
            type: "button",
            "aria-label": "Delete",
            className: "image-selector__delete-button",
            disabled: this.props.deleting,
            onClick: this.props.onDelete.bind(null, this.props.resourceType),
            children: "\xD7"
          })]
        }), this.state.working && /*#__PURE__*/_jsx("p", {
          className: "image-selector__loader",
          children: this.props.loading
        })]
      })]
    });
  }
}
ImageSelector.propTypes = {
  allowDelete: PropTypes.bool,
  baseExpansion: PropTypes.number,
  deleting: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  minArea: PropTypes.number,
  maxSize: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  ratio: PropTypes.number,
  reductionPerPass: PropTypes.number,
  resourceSrc: PropTypes.string.isRequired,
  resourceType: PropTypes.string
};
ImageSelector.defaultProps = {
  allowDelete: false,
  baseExpansion: 3 / 4,
  deleting: false,
  loading: 'Loading...',
  maxSize: Infinity,
  minArea: 300,
  onChange: () => {},
  onDelete: () => {},
  reductionPerPass: 0.05,
  resourceSrc: '',
  ratio: NaN
};
export default ImageSelector;