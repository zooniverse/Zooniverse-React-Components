"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import updateQueryParams from './update-query-params';

var pageOption = function pageOption(n, i) {
  return _react2.default.createElement(
    "option",
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
      pageKey = _ref.pageKey,
      pageSelector = _ref.pageSelector,
      previousLabel = _ref.previousLabel,
      router = _ref.router,
      totalItems = _ref.totalItems;

  var pageChange = void 0;
  if (router !== undefined && onPageChange === undefined) {
    pageChange = function pageChange(activePage) {
      var queryChange = {};
      queryChange[pageKey] = activePage;
      updateQueryParams(router, queryChange);
    };
  } else {
    pageChange = onPageChange;
  }

  var clickPrev = void 0;
  if (onClickPrev === undefined) {
    clickPrev = function clickPrev() {
      pageChange(page - 1);
    };
  } else {
    clickPrev = function clickPrev() {
      onClickPrev(page);
    };
  }

  var clickNext = void 0;
  if (onClickNext === undefined) {
    clickNext = function clickNext() {
      pageChange(page + 1);
    };
  } else {
    clickNext = function clickNext() {
      onClickNext(page);
    };
  }

  var paginatorClassName = ("paginator " + className).trim();

  return _react2.default.createElement(
    "div",
    { className: paginatorClassName },
    firstAndLast && _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-button",
        onClick: function onClick() {
          return pageChange(1);
        },
        disabled: page === 1
      },
      firstLabel
    ),
    _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-button",
        disabled: page === 1,
        onClick: function onClick() {
          return clickPrev();
        }
      },
      previousLabel
    ),
    pageSelector && _react2.default.createElement(
      "div",
      { className: "paginator-page-selector" },
      "PAGE\xA0",
      _react2.default.createElement(
        "select",
        {
          value: page,
          onChange: function onChange(e) {
            pageChange(e.target.value);
          }
        },
        Array.from({ length: pageCount }, function (v, i) {
          return i + 1;
        }).map(pageOption)
      ),
      " OF ",
      pageCount
    ),
    itemCount && totalItems && _react2.default.createElement(
      "div",
      { className: "paginator-page-selector" },
      totalItems
    ),
    _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-button",
        disabled: page === pageCount,
        onClick: function onClick() {
          return clickNext();
        }
      },
      nextLabel
    ),
    firstAndLast && _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-button",
        onClick: function onClick() {
          return pageChange(pageCount);
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
    "span",
    null,
    _react2.default.createElement(
      "span",
      { className: "paginator-icon" },
      "\xAB"
    ),
    " FIRST"
  ),
  itemCount: false,
  lastLabel: _react2.default.createElement(
    "span",
    null,
    "LAST ",
    _react2.default.createElement(
      "span",
      { className: "paginator-icon" },
      "\xBB"
    )
  ),
  nextLabel: _react2.default.createElement(
    "span",
    null,
    "NEXT ",
    _react2.default.createElement(
      "span",
      { className: "paginator-icon" },
      "\u203A"
    )
  ),
  page: 1,
  pageKey: 'page',
  pageSelector: true,
  previousLabel: _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement(
      "span",
      { className: "paginator-icon" },
      "\u2039"
    ),
    " PREVIOUS"
  ),
  totalItems: undefined
};

Paginator.propTypes = {
  className: _react2.default.PropTypes.string,
  firstAndLast: _react2.default.PropTypes.bool,
  firstLabel: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
  itemCount: _react2.default.PropTypes.bool,
  lastLabel: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
  nextLabel: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
  onClickNext: _react2.default.PropTypes.func,
  onClickPrev: _react2.default.PropTypes.func,
  onPageChange: _react2.default.PropTypes.func,
  page: _react2.default.PropTypes.number.isRequired,
  pageCount: _react2.default.PropTypes.number,
  pageKey: _react2.default.PropTypes.string,
  pageSelector: _react2.default.PropTypes.bool,
  previousLabel: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
  router: _react2.default.PropTypes.shape({
    push: _react2.default.PropTypes.func
  }),
  totalItems: _react2.default.PropTypes.node
};

exports.default = Paginator;