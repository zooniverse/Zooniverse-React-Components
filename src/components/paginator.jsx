import React from 'react';
import FontAwesome from 'font-awesome/css/font-awesome.min.css'; // eslint-disable-line no-unused-vars

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
  pageSelector,
  previousLabel,
  totalItems,
}) => {
  let clickPrev;
  if (onClickPrev === undefined) {
    clickPrev = () => {
      onPageChange(page - 1);
    };
  } else {
    clickPrev = () => {
      onClickPrev(page);
    };
  }

  let clickNext;
  if (onClickNext === undefined) {
    clickNext = () => {
      onPageChange(page + 1);
    };
  } else {
    clickNext = () => {
      onClickNext(page);
    };
  }

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
          {firstLabel}
        </button>)}

      <button
        type="button"
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
            onChange={(e) => { onPageChange(e.target.value); }}
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
        className="paginator-button"
        disabled={page === pageCount}
        onClick={() => clickNext()}
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
          {lastLabel}
        </button>)}

    </div>
  );
};

Paginator.defaultProps = {
  className: '',
  firstAndLast: true,
  firstLabel: <span className="paginator-label"><i className="fa fa-angle-double-left" /> FIRST</span>,
  itemCount: false,
  lastLabel: <span className="paginator-label">LAST <i className="fa fa-angle-double-right" /></span>,
  nextLabel: <span className="paginator-label">NEXT <i className="fa fa-angle-right" /></span>,
  onPageChange: () => {},
  page: 1,
  pageSelector: true,
  previousLabel: <span className="paginator-label"><i className="fa fa-angle-left" /> PREVIOUS</span>,
  totalItems: undefined,
};

Paginator.propTypes = {
  className: React.PropTypes.string,
  firstAndLast: React.PropTypes.bool,
  firstLabel: React.PropTypes.node,
  itemCount: React.PropTypes.bool,
  lastLabel: React.PropTypes.node,
  nextLabel: React.PropTypes.node,
  onClickNext: React.PropTypes.func,
  onClickPrev: React.PropTypes.func,
  onPageChange: React.PropTypes.func,
  page: React.PropTypes.number.isRequired,
  pageCount: React.PropTypes.number,
  pageSelector: React.PropTypes.bool,
  previousLabel: React.PropTypes.node,
  totalItems: React.PropTypes.node,
};

export default Paginator;
