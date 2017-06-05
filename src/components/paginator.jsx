import React from 'react';
import updateQueryParams from '../lib/update-query-params';

const pageOption = (n, i) =>
  <option key={i} value={n}>
    {n}
  </option>;

const Paginator = ({
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
  totalItems,
}) => {
  let pageChange;
  if (router && onPageChange === undefined) {
    pageChange = (activePage) => {
      const queryChange = {};
      queryChange[pageKey] = activePage;
      updateQueryParams(router, queryChange);
    };
  } else {
    pageChange = onPageChange;
  }

  let clickPrev;
  if (onClickPrev) {
    clickPrev = () => {
      onClickPrev(page);
    };
  } else {
    clickPrev = () => {
      pageChange(page - 1);
    };
  }

  let clickNext;
  if (onClickNext) {
    clickNext = () => {
      onClickNext(page);
    };
  } else {
    clickNext = () => {
      pageChange(page + 1);
    };
  }

  const paginatorClassName = `paginator ${className}`.trim();

  return (
    <div className={paginatorClassName}>
      {firstAndLast &&
        (<button
          type="button"
          id="first"
          className="paginator-button"
          onClick={() => pageChange(1)}
          disabled={page === 1}
        >
          {firstLabel}
        </button>)}

      <button
        type="button"
        id="previous"
        className="paginator-button"
        disabled={page === 1}
        onClick={() => clickPrev()}
      >
        {previousLabel}
      </button>

      {pageSelector &&
        (<div className="paginator-page-selector">
          PAGE&nbsp;
          <select
            value={page}
            onChange={(e) => { pageChange(e.target.value); }}
          >
            {Array.from({ length: pageCount }, (v, i) => i + 1).map(pageOption)}
          </select> OF {pageCount}
        </div>)}

      {itemCount && totalItems &&
        (<div className="paginator-page-selector">
          {totalItems}
        </div>)}

      <button
        type="button"
        id="next"
        className="paginator-button"
        disabled={page === pageCount}
        onClick={() => clickNext()}
      >
        {nextLabel}
      </button>

      {firstAndLast &&
        (<button
          type="button"
          id="last"
          className="paginator-button"
          onClick={() => pageChange(pageCount)}
          disabled={page === pageCount}
        >
          {lastLabel}
        </button>)}

    </div>
  );
};

Paginator.defaultProps = {
  className: '',
  firstAndLast: true,
  firstLabel: <span><span className="paginator-icon">&laquo;</span> FIRST</span>,
  itemCount: false,
  lastLabel: <span>LAST <span className="paginator-icon">&raquo;</span></span>,
  nextLabel: <span>NEXT <span className="paginator-icon">&rsaquo;</span></span>,
  page: 1,
  pageKey: 'page',
  pageSelector: true,
  previousLabel: <span><span className="paginator-icon">&lsaquo;</span> PREVIOUS</span>,
  totalItems: undefined,
};

Paginator.propTypes = {
  className: React.PropTypes.string,
  firstAndLast: React.PropTypes.bool,
  firstLabel: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  itemCount: React.PropTypes.bool,
  lastLabel: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  nextLabel: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  onClickNext: React.PropTypes.func,
  onClickPrev: React.PropTypes.func,
  onPageChange: React.PropTypes.func,
  page: React.PropTypes.number,
  pageCount: React.PropTypes.number,
  pageKey: React.PropTypes.string,
  pageSelector: React.PropTypes.bool,
  previousLabel: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  router: React.PropTypes.shape({
    push: React.PropTypes.func,
  }),
  totalItems: React.PropTypes.node,
};

export default Paginator;
