import React from 'react';
import ReactDOM from 'react-dom';
import toBlob from 'data-uri-to-blob';
import FileButton from './file-button';
import MediaIcon from './media-icon';

const BASE_64_EXPANSION = 3 / 4;

export default class ImageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      rootWidth: NaN,
      working: false,
    };
  }

  // componentDidMount() {
  //   addEventListener('resize', this.updateWidth);
  //   this.updateWidth();
  // }

  // componentWillUnmount() {
  //   removeEventListener('resize', this.updateWidth);
  // }

  // updateWidth() {
  //   const imageSelectorPreviews = this.imgPreview;

  //   for (const img in imageSelectorPreviews) {
  //     img.dataset.displayWas = img.style.display;
  //     img.style.display = 'none';
  //   }

  //   this.setState({ rootWidth: NaN }, () => {
  //     this.setState({ rootWidth: this.node.clientWidth });

  //     for (const img in imageSelectorPreviews) {
  //       img.style.display = img.dataset.displayWas;
  //       delete img.dataset.displayWas;
  //     }
  //   });
  // }

  handleChange(event) {
    if (event.target.files.length !== 0) {
      const [file] = event.target.files;
      this.setState({ error: null, working: true });

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          return this.cropImage(img, file);
        };
        img.src = e.target.result;
      };

      return reader.readAsDataURL(file);
    }

    return null;
  }

  cropImage(srcImg, srcFile) {
    const canvas = document.createElement('canvas');
    canvas.width = srcImg.naturalWidth;
    canvas.height = srcImg.naturalHeight;

    if (!isNaN(this.props.ratio)) {
      const naturalRatio = srcImg.naturalWidth / srcImg.naturalHeight;
      if (naturalRatio - this.props.ratio < 0) {
        canvas.height = canvas.width / this.props.ratio;
      } else {
        canvas.width = canvas.height * this.props.ratio;
      }
    }

    const ctx = canvas.getContext('2d');
    ctx.drawImage(srcImg, (srcImg.naturalWidth - canvas.width) / -2, (srcImg.naturalHeight - canvas.height) / -2);

    const croppedImg = new Image();
    croppedImg.onload = () => {
      this.reduceImage(croppedImg, srcFile);
    };
    croppedImg.src = canvas.toDataURL();
  }

  reduceImage(img, srcFile, _scale = 1) {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth * _scale;
    canvas.height = img.naturalHeight * _scale;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL(srcFile.type);

    try {
      const size = dataURL.split(';base64,')[1].length * BASE_64_EXPANSION;

      if (size > this.props.maxSize && canvas.width * canvas.height > this.props.minArea) {
        // Keep trying until it's small enough.
        this.reduceImage(img, srcFile, _scale - this.props.reductionPerPass);
      } else {
        this.setState({ working: false });

        img.title = srcFile.name;
        this.props.onChange(toBlob(dataURL), img);
      }
    }
    catch (e) {
      this.setState({ working: false, error: 'Error reducing image. Try a smaller one.' });
    }
  }

  render() {
    const errorMessage = this.state.error ? <span>{this.state.error}</span> : null;
    const loading =
      (<span
        style={{
          fontSize: '2em',
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {this.props.loadingIndicator || 'Loading...'}
      </span>);

    const imageSelectorStyles = Object.assign(
      {}, this.props.imageSelectorStyles, { width: this.state.rootWidth || 'auto' }
    );

    const mediaIcon = <MediaIcon resource={this.props.resource} />;

    return (
      <div style={imageSelectorStyles}>
        {this.props.resource ? mediaIcon : this.props.placeholder}
        <span>{errorMessage}</span>
        <FileButton
          accept={this.props.accept}
          disabled={this.state.working}
          style={this.props.fileButtonStyles}
          onSelect={this.handleChange}
        />

        {(this.state.working) ? loading : null}
      </div>
    );
  }
}

ImageSelector.defaultProps = {
  accept: 'image/*',
  fileButtonStyles: {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    position: 'absolute',
    opacity: 0,
    top: 0,
    width: '100%',
  },
  imageSelectorStyles: {
    background: 'rgba(gray, 0.2)',
    border: '1px solid rgba(gray, 0.4)',
    borderRadius: '5px',
    position: 'relative',
  },
  loadingIndicator: null,
  maxSize: Infinity, // In bytes
  minArea: 300, // Stop reducing when there are fewer than this many pixels.
  onChange: () => {},
  placeholder: '',
  ratio: NaN, // Width / height
  reductionPerPass: 0.05,
  resource: null,
};

ImageSelector.propTypes = {
  accept: React.PropTypes.string,
  fileButtonStyles: React.PropTypes.object,
  imageSelectorStyles: React.PropTypes.object,
  loadingIndicator: React.PropTypes.element,
  maxSize: React.PropTypes.number,
  minArea: React.PropTypes.number,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.node,
  ratio: React.PropTypes.number,
  reductionPerPass: React.PropTypes.number,
  resource: React.PropTypes.shape({
    src: React.PropTypes.string,
  }).isRequired,
};
