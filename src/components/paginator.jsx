import React from 'react';

const pageOption = (n, i) =>
  <option key={i} value={n}>
    {n}
  </option>;

const Paginator = ({
  className,
  firstAndLast,
  itemCount,
  nextLabel,
  // onClickNext,
  // onClickPrev,
  onPageChange,
  page,
  pageCount,
  pageSelector,
  previousLabel,
  totalItems,
}) => {
  const paginatorClassName = `paginator ${className}`.trim();

  return (
    <div className={paginatorClassName}>
      {firstAndLast &&
        (<button
          type="button"
          className="paginator-button"
          onClick={() => onPageChange(1)}
          disabled={page === 1}
        >
          <i className="fa fa-fast-backward" /> First
        </button>)}

      <button
        type="button"
        className="paginator-button"
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

      {itemCount && totalItems &&
        (<div className="paginator-page-selector">
          {totalItems}
        </div>)}

      <button
        type="button"
        className="paginator-button"
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        {nextLabel}
      </button>

      {firstAndLast &&
        (<button
          type="button"
          className="paginator-button"
          onClick={() => onPageChange(pageCount)}
          disabled={page === pageCount}
        >
          Last <i className="fa fa-fast-forward" />
        </button>)}

    </div>
  );
};

Paginator.defaultProps = {
  className: '',
  firstAndLast: true,
  itemCount: false,
  nextLabel: <span>Next <i className="fa fa-long-arrow-right" /></span>,
  // onClickNext: () => {
  //   this.onPageChange(this.page + 1);
  // },
  // onClickPrev: () => {
  //   this.onPageChange(this.page - 1);
  // },
  onPageChange: () => {},
  page: 1,
  pageSelector: true,
  previousLabel: <span><i className="fa fa-long-arrow-left" /> Previous</span>,
  totalItems: undefined,
};

Paginator.propTypes = {
  className: React.PropTypes.string,
  firstAndLast: React.PropTypes.bool,
  itemCount: React.PropTypes.bool,
  nextLabel: React.PropTypes.node,
  // onClickNext: React.PropTypes.func,
  // onClickPrev: React.PropTypes.func,
  onPageChange: React.PropTypes.func.isRequired,
  page: React.PropTypes.number.isRequired,
  pageCount: React.PropTypes.number,
  pageSelector: React.PropTypes.bool,
  previousLabel: React.PropTypes.node,
  totalItems: React.PropTypes.node,
};

export default Paginator;
