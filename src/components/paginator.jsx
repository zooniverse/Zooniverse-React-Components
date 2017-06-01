import React from 'react';
import FontAwesome from 'font-awesome/css/font-awesome.min.css'; // eslint-disable-line no-unused-vars

const pageOption = (n, i) =>
  <option key={i} value={n}>
    {n}
  </option>;

const Paginator = ({
  className,
  firstAndLast,
  firstIcon,
  itemCount,
  lastIcon,
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
          {firstIcon} First
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
          Last {lastIcon}
        </button>)}

    </div>
  );
};

Paginator.defaultProps = {
  className: '',
  firstAndLast: true,
  firstIcon: <i className="fa fa-fast-backward" />,
  itemCount: false,
  lastIcon: <i className="fa fa-fast-forward" />,
  nextLabel: <span>Next <i className="fa fa-long-arrow-right" /></span>,
  onPageChange: () => {},
  page: 1,
  pageSelector: true,
  previousLabel: <span><i className="fa fa-long-arrow-left" /> Previous</span>,
  totalItems: undefined,
};

Paginator.propTypes = {
  className: React.PropTypes.string,
  firstAndLast: React.PropTypes.bool,
  firstIcon: React.PropTypes.node,
  itemCount: React.PropTypes.bool,
  lastIcon: React.PropTypes.node,
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
