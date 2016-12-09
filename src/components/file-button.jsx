import React from 'react';

export default class FileButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resetting: false
    };
  }

  componentDidUpdate() {
    if (this.state.resetting) {
      this.setState({ resetting: false });
    }
  }

  handleChange() {
    this.props.onSelect(...arguments);
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

    const style = Object.assign({}, this.props.rootStyle, this.props.style, {
      'data-accept': this.props.accept,
      'data-disabled': this.props.disabled || null,
      'data-multiple': this.props.multiple || null
    });

    return (
      React.createElement(this.props.tag,
        { className: `file-button ${this.props.className}`.trim(), style },
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
  rootStyle: { position: 'relative' },
  style: {},
  tag: 'label'
};

FileButton.propTypes = {
  accept: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  containerStyle: React.PropTypes.object,
  disabled: React.PropTypes.bool,
  inputStyle: React.PropTypes.object,
  multiple: React.PropTypes.bool,
  onSelect: React.PropTypes.func,
  rootStyle: React.PropTypes.object,
  style: React.PropTypes.object,
  tag: React.PropTypes.string
};

