import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import animatedScrollTo from 'animated-scrollto';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class StepThrough extends Component {
  constructor(props) {
    super(props);
    this.goPrevious = this.goPrevious.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goTo = this.goTo.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.renderControls = this.renderControls.bind(this);
    this.state = {
      render: false,
      step: props.defaultStep
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.swiper && this.swiper.swipe.setup();
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  goPrevious() {
    this.swiper.swipe.prev();
    this.handleScroll();
  }
  goNext() {
    this.swiper.swipe.next();
    this.handleScroll();
  }
  goTo(index) {
    this.swiper.swipe.slide(index);
    this.handleScroll();
  }
  handleStep(total, index) {
    this.setState({
      step: (index % total + total) % total
    });
  }
  handleKeyDown(e) {
    switch (e.which) {
      // left
      case 37:
        e.preventDefault();
        this.goPrevious();
        break;
      // right
      case 39:
        e.preventDefault();
        this.goNext();
        break;
    }
  }
  handleScroll() {
    var reactSwipeNode = this.swiper;
    setTimeout(animatedScrollTo(reactSwipeNode, reactSwipeNode.offsetTop, 0), 500);
  }
  renderControls(childrenCount) {
    if (childrenCount === 1) {
      return null;
    } else {
      var allSteps = Array.from(Array(childrenCount).keys());
      return /*#__PURE__*/_jsxs("div", {
        className: "step-through-controls",
        children: [/*#__PURE__*/_jsx("button", {
          type: "button",
          className: "step-through-direction step-through-previous",
          "aria-label": "Previous step",
          title: "Previous",
          disabled: this.state.step === 0,
          onClick: this.goPrevious,
          children: "\u25C0"
        }), /*#__PURE__*/_jsx("span", {
          className: "step-through-pips",
          children: allSteps.map(thisStep => /*#__PURE__*/_jsxs("label", {
            className: "step-through-pip",
            title: "Step ".concat(thisStep + 1),
            children: [/*#__PURE__*/_jsx("input", {
              type: "radio",
              className: "step-through-pip-input",
              "aria-label": "Step ".concat(thisStep + 1, " of ").concat(childrenCount),
              checked: thisStep === this.state.step,
              autoFocus: thisStep === this.state.step,
              onChange: this.goTo.bind(this, thisStep)
            }), /*#__PURE__*/_jsx("span", {
              className: "step-through-pip-number",
              children: thisStep + 1
            })]
          }, thisStep))
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          className: "step-through-direction step-through-next",
          "aria-label": "Next step",
          title: "Next",
          disabled: this.state.step === childrenCount - 1,
          onClick: this.goNext,
          children: "\u25B6"
        })]
      });
    }
  }
  render() {
    var childrenCount = React.Children.count(this.props.children);
    var swipeOptions = {
      startSlide: this.state.step,
      continuous: false,
      callback: this.handleStep.bind(this, childrenCount)
    };
    return /*#__PURE__*/_jsxs("div", {
      className: "step-through",
      className: this.props.className,
      style: this.props.style,
      children: [/*#__PURE__*/_jsx(ReactSwipe, {
        ref: el => {
          this.swiper = el;
        },
        className: "step-through-content",
        swipeOptions: swipeOptions,
        children: this.props.children
      }), this.renderControls(childrenCount)]
    });
  }
}
StepThrough.propTypes = {
  defaultStep: PropTypes.number
};
StepThrough.defaultProps = {
  defaultStep: 0
};
export default StepThrough;