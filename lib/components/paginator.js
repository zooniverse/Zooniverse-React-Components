'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fontAwesomeMin = require('font-awesome/css/font-awesome.min.css');

var _fontAwesomeMin2 = _interopRequireDefault(_fontAwesomeMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var pageOption = function pageOption(n, i) {
  return _react2.default.createElement(
    'option',
    { key: i, value: n },
    n
  );
};

var Paginator = function Paginator(_ref) {
  var className = _ref.className,
      firstAndLast = _ref.firstAndLast,
      firstLabel = _ref.firstLabel,
      itemCount = _ref.itemCount,
      lastLabel = _ref.lastLabel,
      nextLabel = _ref.nextLabel,
      onClickNext = _ref.onClickNext,
      onClickPrev = _ref.onClickPrev,
      onPageChange = _ref.onPageChange,
      page = _ref.page,
      pageCount = _ref.pageCount,
      pageSelector = _ref.pageSelector,
      previousLabel = _ref.previousLabel,
      totalItems = _ref.totalItems;

  var clickPrev = void 0;
  if (onClickPrev === undefined) {
    clickPrev = function clickPrev() {
      onPageChange(page - 1);
    };
  } else {
    clickPrev = function clickPrev() {
      onClickPrev(page);
    };
  }

  var clickNext = void 0;
  if (onClickNext === undefined) {
    clickNext = function clickNext() {
      onPageChange(page + 1);
    };
  } else {
    clickNext = function clickNext() {
      onClickNext(page);
    };
  }

  var paginatorClassName = ('paginator ' + className).trim();

  return _react2.default.createElement(
    'div',
    { className: paginatorClassName },
    firstAndLast && _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'paginator-button',
        onClick: function onClick() {
          return onPageChange(1);
        },
        disabled: page === 1
      },
      firstLabel
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'paginator-button',
        disabled: page === 1,
        onClick: function onClick() {
          return clickPrev();
        }
      },
      previousLabel
    ),
    pageSelector && _react2.default.createElement(
      'div',
      { className: 'paginator-page-selector' },
      'PAGE\xA0',
      _react2.default.createElement(
        'select',
        {
          value: page,
          onChange: function onChange(e) {
            onPageChange(e.target.value);
          }
        },
        Array.from({ length: pageCount }, function (v, i) {
          return i + 1;
        }).map(pageOption)
      ),
      ' OF ',
      pageCount
    ),
    itemCount && totalItems && _react2.default.createElement(
      'div',
      { className: 'paginator-page-selector' },
      totalItems
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'paginator-button',
        disabled: page === pageCount,
        onClick: function onClick() {
          return clickNext();
        }
      },
      nextLabel
    ),
    firstAndLast && _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'paginator-button',
        onClick: function onClick() {
          return onPageChange(pageCount);
        },
        disabled: page === pageCount
      },
      lastLabel
    )
  );
};

Paginator.defaultProps = {
  className: '',
  firstAndLast: true,
  firstLabel: _react2.default.createElement(
    'span',
    { className: 'paginator-label' },
    _react2.default.createElement('i', { className: 'fa fa-angle-double-left' }),
    ' FIRST'
  ),
  itemCount: false,
  lastLabel: _react2.default.createElement(
    'span',
    { className: 'paginator-label' },
    'LAST ',
    _react2.default.createElement('i', { className: 'fa fa-angle-double-right' })
  ),
  nextLabel: _react2.default.createElement(
    'span',
    { className: 'paginator-label' },
    'NEXT ',
    _react2.default.createElement('i', { className: 'fa fa-angle-right' })
  ),
  onPageChange: function onPageChange() {},
  page: 1,
  pageSelector: true,
  previousLabel: _react2.default.createElement(
    'span',
    { className: 'paginator-label' },
    _react2.default.createElement('i', { className: 'fa fa-angle-left' }),
    ' PREVIOUS'
  ),
  totalItems: undefined
};

Paginator.propTypes = {
  className: _react2.default.PropTypes.string,
  firstAndLast: _react2.default.PropTypes.bool,
  firstLabel: _react2.default.PropTypes.node,
  itemCount: _react2.default.PropTypes.bool,
  lastLabel: _react2.default.PropTypes.node,
  nextLabel: _react2.default.PropTypes.node,
  onClickNext: _react2.default.PropTypes.func,
  onClickPrev: _react2.default.PropTypes.func,
  onPageChange: _react2.default.PropTypes.func,
  page: _react2.default.PropTypes.number.isRequired,
  pageCount: _react2.default.PropTypes.number,
  pageSelector: _react2.default.PropTypes.bool,
  previousLabel: _react2.default.PropTypes.node,
  totalItems: _react2.default.PropTypes.node
};

exports.default = Paginator;