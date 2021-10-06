/* eslint-disable no-restricted-globals */
import React from 'react';

const MAX_MOBILE_WIDTH = 1080;

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function withMobileView(WrappedComponent) {
  class WithMobileView extends React.Component {
    constructor() {
      super();

      this.state = {
        isMobile: false
      };

      this._resizeTimeout = NaN;
      this.handleResize = this.handleResize.bind(this);
      this.handleResize();
    }

    componentDidMount() {
      if (window) window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      if (window) window.removeEventListener('resize', this.handleResize);
      clearTimeout(this._resizeTimeout);
    }

    handleResize() {
      if (!isNaN(this._resizeTimeout)) {
        clearTimeout(this._resizeTimeout);
      }

      if (window) {
        this._resizeTimeout = setTimeout(() => {
          this.setState({
            isMobile: window.innerWidth <= MAX_MOBILE_WIDTH
          }, () => {
            this._resizeTimeout = NaN;
          });
        }, 100);
      }
    }

    render() {
      const { isMobile } = this.state;
      return <WrappedComponent isMobile={isMobile} {...this.props} />;
    }
  }

  WithMobileView.displayName = `WithMobileView(${getDisplayName(WrappedComponent)})`;
  return WithMobileView;
}
