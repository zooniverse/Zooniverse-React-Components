import React from 'react';

const pageOption = (n, i) =>
  <option key={i} value={n}>
    {n}
  </option>;

const Paginator = ({
  firstAndLast,
  nextLabel,
  onPageChange,
  page,
  pageCount,
  pageSelector,
  previousLabel,
}) =>
  <div className="paginator">
    {firstAndLast &&
      (<button
        type="button"
        className="paginator-first"
        onClick={() => onPageChange(1)}
        disabled={page === 1}
      >
        <i className="fa fa-fast-backward" /> First
      </button>)}

    <button
      type="button"
      className="paginator-prev"
      disabled={page === 1}
      onClick={() => onPageChange(page - 1)}
    >
      {previousLabel}
    </button>

    {pageSelector &&
      (<div className="paginator-page-selector">
        Page&nbsp;
        <select
          value={page}
          onChange={(e) => { onPageChange(e.target.value); }}
        >
          {Array.from({ length: pageCount }, (v, i) => i + 1).map(pageOption)}
        </select> of {pageCount}
      </div>)}

    <button
      type="button"
      className="paginator-next"
      disabled={page === pageCount}
      onClick={() => onPageChange(page + 1)}
    >
      {nextLabel}
    </button>

    {firstAndLast &&
      (<button
        type="button"
        className="paginator-last"
        onClick={() => onPageChange(pageCount)}
        disabled={page === pageCount}
      >
        Last <i className="fa fa-fast-forward" />
      </button>)}

  </div>;

Paginator.defaultProps = {
  firstAndLast: true,
  itemCount: true,
  nextLabel: <span>Next <i className="fa fa-long-arrow-right" /></span>,
  page: 1,
  pageSelector: true,
  previousLabel: <span><i className="fa fa-long-arrow-left" /> Previous</span>,
};

Paginator.propTypes = {
  firstAndLast: React.PropTypes.bool,
  nextLabel: React.PropTypes.node,
  onPageChange: React.PropTypes.func.isRequired,
  page: React.PropTypes.number,
  pageCount: React.PropTypes.number,
  pageSelector: React.PropTypes.bool,
  previousLabel: React.PropTypes.node,
};

export default Paginator;
