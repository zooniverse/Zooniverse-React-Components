"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageOption = function pageOption(n, i) {
  return _react2.default.createElement(
    "option",
    { key: i, value: n },
    n
  );
};

var Paginator = function Paginator(_ref) {
  var firstAndLast = _ref.firstAndLast,
      nextLabel = _ref.nextLabel,
      onPageChange = _ref.onPageChange,
      page = _ref.page,
      pageCount = _ref.pageCount,
      pageSelector = _ref.pageSelector,
      previousLabel = _ref.previousLabel;
  return _react2.default.createElement(
    "div",
    { className: "paginator" },
    firstAndLast && _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-first",
        onClick: function onClick() {
          return onPageChange(1);
        },
        disabled: page === 1
      },
      _react2.default.createElement("i", { className: "fa fa-fast-backward" }),
      " First"
    ),
    _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-prev",
        disabled: page === 1,
        onClick: function onClick() {
          return onPageChange(page - 1);
        }
      },
      previousLabel
    ),
    pageSelector && _react2.default.createElement(
      "div",
      { className: "paginator-page-selector" },
      "Page\xA0",
      _react2.default.createElement(
        "select",
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
      " of ",
      pageCount
    ),
    _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-next",
        disabled: page === pageCount,
        onClick: function onClick() {
          return onPageChange(page + 1);
        }
      },
      nextLabel
    ),
    firstAndLast && _react2.default.createElement(
      "button",
      {
        type: "button",
        className: "paginator-last",
        onClick: function onClick() {
          return onPageChange(pageCount);
        },
        disabled: page === pageCount
      },
      "Last ",
      _react2.default.createElement("i", { className: "fa fa-fast-forward" })
    )
  );
};

Paginator.defaultProps = {
  firstAndLast: true,
  itemCount: true,
  nextLabel: _react2.default.createElement(
    "span",
    null,
    "Next ",
    _react2.default.createElement("i", { className: "fa fa-long-arrow-right" })
  ),
  page: 1,
  pageSelector: true,
  previousLabel: _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement("i", { className: "fa fa-long-arrow-left" }),
    " Previous"
  )
};

Paginator.propTypes = {
  firstAndLast: _react2.default.PropTypes.bool,
  nextLabel: _react2.default.PropTypes.node,
  onPageChange: _react2.default.PropTypes.func.isRequired,
  page: _react2.default.PropTypes.number,
  pageCount: _react2.default.PropTypes.number,
  pageSelector: _react2.default.PropTypes.bool,
  previousLabel: _react2.default.PropTypes.node
};

exports.default = Paginator;