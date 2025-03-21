"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _updateQueryParams = _interopRequireDefault(require("../lib/update-query-params"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var pageOption = function pageOption(n) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
    value: n,
    children: n
  }, n);
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
    selectionText = _ref.selectionText,
    totalItems = _ref.totalItems;
  var pageChange;
  if (router && !onPageChange) {
    pageChange = function pageChange(activePage) {
      var queryChange = {};
      queryChange[pageKey] = activePage;
      (0, _updateQueryParams["default"])(router, queryChange);
    };
  } else {
    pageChange = onPageChange;
  }
  var clickPrev;
  if (onClickPrev) {
    clickPrev = function clickPrev() {
      onClickPrev(page);
    };
  } else {
    clickPrev = function clickPrev() {
      pageChange(page - 1);
    };
  }
  var clickNext;
  if (onClickNext) {
    clickNext = function clickNext() {
      onClickNext(page);
    };
  } else {
    clickNext = function clickNext() {
      pageChange(page + 1);
    };
  }
  var paginatorClassName = "paginator ".concat(className).trim();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: paginatorClassName,
    children: [firstAndLast && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      id: "first",
      className: "paginator-button",
      onClick: function onClick() {
        return pageChange(1);
      },
      disabled: page === 1,
      children: firstLabel
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      id: "previous",
      className: "paginator-button",
      disabled: page === 1,
      onClick: function onClick() {
        return clickPrev();
      },
      children: previousLabel
    }), pageSelector && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "paginator-page-selector",
      children: ["PAGE", /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        value: page,
        onChange: function onChange(e) {
          pageChange(e.target.value);
        },
        children: _toConsumableArray(Array(pageCount).keys()).map(function (i) {
          return pageOption(i + 1);
        })
      }), selectionText, " ", pageCount]
    }), itemCount && totalItems && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "paginator-page-selector",
      children: totalItems
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      id: "next",
      className: "paginator-button",
      disabled: page === pageCount,
      onClick: function onClick() {
        return clickNext();
      },
      children: nextLabel
    }), firstAndLast && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      id: "last",
      className: "paginator-button",
      onClick: function onClick() {
        return pageChange(pageCount);
      },
      disabled: page === pageCount,
      children: lastLabel
    })]
  });
};
Paginator.defaultProps = {
  className: '',
  firstAndLast: true,
  firstLabel: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "paginator-label",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "paginator-icon",
      children: "\xAB"
    }), " first"]
  }),
  itemCount: false,
  lastLabel: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "paginator-label",
    children: ["last ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "paginator-icon",
      children: "\xBB"
    })]
  }),
  nextLabel: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "paginator-label",
    children: ["next ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "paginator-icon",
      children: "\u203A"
    })]
  }),
  page: 1,
  pageKey: 'page',
  pageSelector: true,
  previousLabel: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "paginator-label",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "paginator-icon",
      children: "\u2039"
    }), " previous"]
  }),
  selectionText: 'OF'
};
Paginator.propTypes = {
  className: _propTypes["default"].string,
  firstAndLast: _propTypes["default"].bool,
  firstLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  itemCount: _propTypes["default"].bool,
  lastLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  nextLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  onClickNext: _propTypes["default"].func,
  onClickPrev: _propTypes["default"].func,
  onPageChange: _propTypes["default"].func,
  page: _propTypes["default"].number,
  pageCount: _propTypes["default"].number,
  pageKey: _propTypes["default"].string,
  pageSelector: _propTypes["default"].bool,
  previousLabel: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  router: _propTypes["default"].shape({
    push: _propTypes["default"].func
  }),
  selectionText: _propTypes["default"].string,
  totalItems: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string])
};
var _default = exports["default"] = Paginator;