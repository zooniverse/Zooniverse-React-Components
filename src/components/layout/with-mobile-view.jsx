import React from 'react';

const MAX_MOBILE_WIDTH = 1080;

export default function WithMobileView(WrappedComponent) {
  return class extends React.Component {
    constructor() {
      super();

      this.state = {
        isMobile: false
      }

      this._resizeTimeout = NaN;
      this.handleResize = this.handleResize.bind(this);
      this.handleResize();
    }

    componentDidMount() {
      addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      removeEventListener('resize', this.handleResize);
      clearTimeout(this._resizeTimeout);
    }

    handleResize() {
      if (!isNaN(this._resizeTimeout)) {
        clearTimeout(this._resizeTimeout);
      }

      this._resizeTimeout = setTimeout(() => {
        this.setState({
          isMobile: innerWidth <= MAX_MOBILE_WIDTH
        }, () => {
          this._resizeTimeout = NaN;
        });
      }, 100);
    }

    render() {
      return <WrappedComponent isMobile={this.state.isMobile} {...this.props} />;
    }
  }
}
