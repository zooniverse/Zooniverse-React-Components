import React from 'react';

export default class FileButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resetting: false,
    };
  }

  componentDidUpdate() {
    if (this.state.resetting) {
      this.setState({ resetting: false }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  handleChange(...args) {
    this.props.onSelect(args);
    this.setState({ resetting: true });
  }

  render() {
    let input;
    if (this.state.resetting) {
      input = null;
    } else {
      const { accept, multiple, disabled } = this.props;
      const passedProps = { accept, multiple, disabled };
      input = <input type="file" {...passedProps} style={this.props.inputStyle} onChange={this.handleChange} />;
    }

    const props = Object.assign({}, this.props.rootStyle, this.props.style, {
      dataAccept: this.props.accept,
      dataDisabled: this.props.disabled || null,
      dataMultiple: this.props.multiple || null,
    });

    return (
      React.createElement(this.props.tag,
        { className: `file-button ${this.props.className}`.trim(), props },
        <span style={this.props.containerStyle}>{input}</span>,
        this.props.children
      )
    );
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
    width: '100%',
  },
  disabled: false,
  inputStyle: {
    cursor: 'pointer',
    height: '300%',
    left: '-100%',
    opacity: 0.01,
    position: 'absolute',
    top: '-100%',
    width: '300%',
  },
  multiple: false,
  onSelect: () => {},
  rootStyle: { position: 'relative' },
  style: {},
  tag: 'label',
};

FileButton.propTypes = {
  accept: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  containerStyle: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  disabled: React.PropTypes.bool,
  inputStyle: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  multiple: React.PropTypes.bool,
  onSelect: React.PropTypes.func,
  rootStyle: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  style: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  tag: React.PropTypes.string,
};

