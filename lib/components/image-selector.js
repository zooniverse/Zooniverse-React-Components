'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataUriToBlob = require('data-uri-to-blob');

var _dataUriToBlob2 = _interopRequireDefault(_dataUriToBlob);

var _fileButton = require('./file-button');

var _fileButton2 = _interopRequireDefault(_fileButton);

var _mediaIcon = require('./media-icon');

var _mediaIcon2 = _interopRequireDefault(_mediaIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BASE_64_EXPANSION = 3 / 4;

var ImageSelector = function (_React$Component) {
  _inherits(ImageSelector, _React$Component);

  function ImageSelector(props) {
    _classCallCheck(this, ImageSelector);

    var _this = _possibleConstructorReturn(this, (ImageSelector.__proto__ || Object.getPrototypeOf(ImageSelector)).call(this, props));

    _this.state = {
      error: null,
      working: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.cropImage = _this.cropImage.bind(_this);
    _this.reduceImage = _this.reduceImage.bind(_this);
    return _this;
  }

  _createClass(ImageSelector, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _this2 = this;

      if (event.target.files.length !== 0) {
        var _ret = function () {
          var _event$target$files = _slicedToArray(event.target.files, 1),
              file = _event$target$files[0];

          _this2.setState({ error: null, working: true });

          var reader = new FileReader();
          reader.onload = function (e) {
            var img = new Image();
            img.onload = function () {
              return _this2.cropImage(img, file);
            };
            img.src = e.target.result;
          };

          return {
            v: reader.readAsDataURL(file)
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }

      return null;
    }
  }, {
    key: 'cropImage',
    value: function cropImage(srcImg, srcFile) {
      var _this3 = this;

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
      croppedImg.onload = function () {
        _this3.reduceImage(croppedImg, srcFile);
      };
      croppedImg.src = canvas.toDataURL();
    }
  }, {
    key: 'reduceImage',
    value: function reduceImage(img, srcFile) {
      var _scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth * _scale;
      canvas.height = img.naturalHeight * _scale;

      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, canvas.width, canvas.height);

      var dataURL = canvas.toDataURL(srcFile.type);

      try {
        var size = dataURL.split(';base64,')[1].length * BASE_64_EXPANSION;

        if (size > this.props.maxSize && canvas.width * canvas.height > this.props.minArea) {
          // Keep trying until it's small enough.
          this.reduceImage(img, srcFile, _scale - this.props.reductionPerPass);
        } else {
          this.setState({ working: false });

          img.title = srcFile.name;
          this.props.onChange((0, _dataUriToBlob2.default)(dataURL), img);
        }
      } catch (e) {
        this.setState({ working: false, error: 'Error reducing image. Try a smaller one.' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var imageSelectorStyles = this.props.imageSelectorStyles;

      if (this.props.resource) {
        imageSelectorStyles = Object.assign({}, this.props.imageSelectorStyles, { background: 'transparent', border: 'none' });
      }

      var errorMessage = this.state.error ? _react2.default.createElement(
        'span',
        null,
        this.state.error
      ) : null;
      var loading = _react2.default.createElement(
        'span',
        {
          style: {
            fontSize: '2em',
            left: '50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }
        },
        this.props.loadingIndicator || 'Loading...'
      );

      var mediaIcon = _react2.default.createElement(_mediaIcon2.default, { resource: this.props.resource });
      var fileButton = _react2.default.createElement(_fileButton2.default, {
        accept: this.props.accept,
        disabled: this.state.working,
        style: this.props.fileButtonStyles,
        onSelect: this.handleChange
      });

      return _react2.default.createElement(
        'div',
        { style: imageSelectorStyles },
        this.props.resource ? mediaIcon : this.props.placeholder,
        _react2.default.createElement(
          'span',
          null,
          errorMessage
        ),
        !this.props.resource ? fileButton : null,
        this.state.working ? loading : null
      );
    }
  }]);

  return ImageSelector;
}(_react2.default.Component);

exports.default = ImageSelector;


ImageSelector.defaultProps = {
  accept: 'image/*',
  fileButtonStyles: {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    position: 'absolute',
    opacity: 0,
    top: 0,
    width: '100%'
  },
  imageSelectorStyles: {
    borderRadius: '5px',
    position: 'relative',
    width: 'auto'
  },
  loadingIndicator: null,
  maxSize: Infinity, // In bytes
  minArea: 300, // Stop reducing when there are fewer than this many pixels.
  onChange: function onChange() {},
  placeholder: '',
  ratio: NaN, // Width / height
  reductionPerPass: 0.05,
  resource: null
};

ImageSelector.propTypes = {
  accept: _react2.default.PropTypes.string,
  fileButtonStyles: _react2.default.PropTypes.object,
  imageSelectorStyles: _react2.default.PropTypes.object,
  loadingIndicator: _react2.default.PropTypes.element,
  maxSize: _react2.default.PropTypes.number,
  minArea: _react2.default.PropTypes.number,
  onChange: _react2.default.PropTypes.func,
  placeholder: _react2.default.PropTypes.node,
  ratio: _react2.default.PropTypes.number,
  reductionPerPass: _react2.default.PropTypes.number,
  resource: _react2.default.PropTypes.shape({
    src: _react2.default.PropTypes.string
  })
};