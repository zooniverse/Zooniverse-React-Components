'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Menu = require('grommet/components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Menu3 = require('grommet/components/icons/base/Menu');

var _Menu4 = _interopRequireDefault(_Menu3);

var _zooniverseLogo = require('../zooniverse-logo');

var _zooniverseLogo2 = _interopRequireDefault(_zooniverseLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_MOBILE_WIDTH = 1080;

var ZooHeader = function (_React$Component) {
  _inherits(ZooHeader, _React$Component);

  function ZooHeader() {
    _classCallCheck(this, ZooHeader);

    var _this = _possibleConstructorReturn(this, (ZooHeader.__proto__ || Object.getPrototypeOf(ZooHeader)).call(this));

    _this.state = {
      isMobile: false
    };

    _this._resizeTimeout = NaN;
    return _this;
  }

  _createClass(ZooHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleResize();
      addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this2 = this;

      if (!isNaN(this.resizeTimeout)) {
        clearTimeout(this.resizeTimeout);
      }

      this._resizeTimeout = setTimeout(function () {
        _this2.setState({
          isMobile: innerWidth <= MAX_MOBILE_WIDTH
        }, function () {
          _this2._resizeTimeout = NaN;
        });
      }, 100);
    }
  }, {
    key: 'createKeyedAnchorItem',
    value: function createKeyedAnchorItem(navItem, i) {
      return _react2.default.cloneElement(navItem, { key: 'navItem-' + i });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _Header2.default,
        { justify: 'between', className: 'zoo-header', direction: 'row', size: 'small', responsive: true },
        _react2.default.createElement(
          _Menu2.default,
          { align: 'center', direction: 'row', size: 'small', responsive: false, inline: true },
          this.props.logoHomeLink && this.props.logoHomeLink,
          !this.state.isMobile && _react2.default.createElement(
            'ul',
            { className: 'zoo-header__nav-list' },
            this.props.mainHeaderNavList.map(function (navItem, i) {
              return _react2.default.createElement(
                'li',
                {
                  key: 'navItem-' + i,
                  className: 'zoo-header__nav-list-item zoo-header__nav-list-item--main'
                },
                navItem
              );
            }),
            this.props.isAdmin && _react2.default.createElement(
              'li',
              { className: 'zoo-header__nav-list-item zoo-header__nav-list-item--main' },
              this.props.adminNavLink
            )
          )
        ),
        this.props.authContainer && this.props.authContainer,
        this.state.isMobile && _react2.default.createElement(
          _Menu2.default,
          { className: 'zoo-header-menu', icon: _react2.default.createElement(_Menu4.default, null), dropAlign: { right: 'right', top: 'top' } },
          this.props.mainHeaderNavList.map(function (navItem, i) {
            return _this3.createKeyedAnchorItem(navItem, i);
          }),
          this.state.isAdmin && this.props.adminNavLink
        )
      );
    }
  }]);

  return ZooHeader;
}(_react2.default.Component);

ZooHeader.defaultProps = {
  adminNavLink: _react2.default.createElement(_Anchor2.default, { className: 'zoo-header__link--small', href: 'http://www.zooniverse.org/admin', label: 'Admin' }),
  authContainer: null,
  isAdmin: false,
  logoHomeLink: _react2.default.createElement(
    _Anchor2.default,
    { className: 'zoo-header__link', href: 'http://www.zooniverse.org' },
    _react2.default.createElement(_zooniverseLogo2.default, { height: '1.25em', width: '1.25em' })
  ),
  mainHeaderNavList: [_react2.default.createElement(_Anchor2.default, { className: 'zoo-header__link--small', href: 'http://www.zooniverse.org/projects', label: 'Projects' }), _react2.default.createElement(_Anchor2.default, { className: 'zoo-header__link--small', href: 'http://www.zooniverse.org/about', label: 'About' }), _react2.default.createElement(_Anchor2.default, { className: 'zoo-header__link--small', href: 'http://www.zooniverse.org/get-involved', label: 'Get Involved' }), _react2.default.createElement(_Anchor2.default, { className: 'zoo-header__link--small', href: 'http://www.zooniverse.org/talk', label: 'Talk' }), _react2.default.createElement(_Anchor2.default, { className: 'zoo-header__link--small', href: 'http://www.zooniverse.org/lab', label: 'Build A Project' })]
};

ZooHeader.propTypes = {
  adminNavLink: _propTypes2.default.node,
  authContainer: _propTypes2.default.node,
  isAdmin: _propTypes2.default.bool,
  logoHomeLink: _propTypes2.default.node.isRequired,
  mainHeaderNavList: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired
};

exports.default = ZooHeader;