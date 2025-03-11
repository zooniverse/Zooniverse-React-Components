import React from 'react';
import PropTypes from 'prop-types';
import updateQueryParams from '../lib/update-query-params';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var pageOption = n => /*#__PURE__*/_jsx("option", {
  value: n,
  children: n
}, n);
var Paginator = _ref => {
  var {
    className,
    firstAndLast,
    firstLabel,
    itemCount,
    lastLabel,
    nextLabel,
    onClickNext,
    onClickPrev,
    onPageChange,
    page,
    pageCount,
    pageKey,
    pageSelector,
    previousLabel,
    router,
    selectionText,
    totalItems
  } = _ref;
  var pageChange;
  if (router && !onPageChange) {
    pageChange = activePage => {
      var queryChange = {};
      queryChange[pageKey] = activePage;
      updateQueryParams(router, queryChange);
    };
  } else {
    pageChange = onPageChange;
  }
  var clickPrev;
  if (onClickPrev) {
    clickPrev = () => {
      onClickPrev(page);
    };
  } else {
    clickPrev = () => {
      pageChange(page - 1);
    };
  }
  var clickNext;
  if (onClickNext) {
    clickNext = () => {
      onClickNext(page);
    };
  } else {
    clickNext = () => {
      pageChange(page + 1);
    };
  }
  var paginatorClassName = "paginator ".concat(className).trim();
  return /*#__PURE__*/_jsxs("div", {
    className: paginatorClassName,
    children: [firstAndLast && /*#__PURE__*/_jsx("button", {
      type: "button",
      id: "first",
      className: "paginator-button",
      onClick: () => pageChange(1),
      disabled: page === 1,
      children: firstLabel
    }), /*#__PURE__*/_jsx("button", {
      type: "button",
      id: "previous",
      className: "paginator-button",
      disabled: page === 1,
      onClick: () => clickPrev(),
      children: previousLabel
    }), pageSelector && /*#__PURE__*/_jsxs("div", {
      className: "paginator-page-selector",
      children: ["PAGE", /*#__PURE__*/_jsx("select", {
        value: page,
        onChange: e => {
          pageChange(e.target.value);
        },
        children: [...Array(pageCount).keys()].map(i => pageOption(i + 1))
      }), selectionText, " ", pageCount]
    }), itemCount && totalItems && /*#__PURE__*/_jsx("div", {
      className: "paginator-page-selector",
      children: totalItems
    }), /*#__PURE__*/_jsx("button", {
      type: "button",
      id: "next",
      className: "paginator-button",
      disabled: page === pageCount,
      onClick: () => clickNext(),
      children: nextLabel
    }), firstAndLast && /*#__PURE__*/_jsx("button", {
      type: "button",
      id: "last",
      className: "paginator-button",
      onClick: () => pageChange(pageCount),
      disabled: page === pageCount,
      children: lastLabel
    })]
  });
};
Paginator.defaultProps = {
  className: '',
  firstAndLast: true,
  firstLabel: /*#__PURE__*/_jsxs("span", {
    className: "paginator-label",
    children: [/*#__PURE__*/_jsx("span", {
      className: "paginator-icon",
      children: "\xAB"
    }), " first"]
  }),
  itemCount: false,
  lastLabel: /*#__PURE__*/_jsxs("span", {
    className: "paginator-label",
    children: ["last ", /*#__PURE__*/_jsx("span", {
      className: "paginator-icon",
      children: "\xBB"
    })]
  }),
  nextLabel: /*#__PURE__*/_jsxs("span", {
    className: "paginator-label",
    children: ["next ", /*#__PURE__*/_jsx("span", {
      className: "paginator-icon",
      children: "\u203A"
    })]
  }),
  page: 1,
  pageKey: 'page',
  pageSelector: true,
  previousLabel: /*#__PURE__*/_jsxs("span", {
    className: "paginator-label",
    children: [/*#__PURE__*/_jsx("span", {
      className: "paginator-icon",
      children: "\u2039"
    }), " previous"]
  }),
  selectionText: 'OF'
};
Paginator.propTypes = {
  className: PropTypes.string,
  firstAndLast: PropTypes.bool,
  firstLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  itemCount: PropTypes.bool,
  lastLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  nextLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onPageChange: PropTypes.func,
  page: PropTypes.number,
  pageCount: PropTypes.number,
  pageKey: PropTypes.string,
  pageSelector: PropTypes.bool,
  previousLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  router: PropTypes.shape({
    push: PropTypes.func
  }),
  selectionText: PropTypes.string,
  totalItems: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};
export default Paginator;