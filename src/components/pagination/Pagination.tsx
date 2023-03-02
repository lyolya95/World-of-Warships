import React, { FC } from 'react';
import { PaginationProps } from './types';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

export const Pagination: FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange(selected);
  };

  return (
    <ReactPaginate
      nextAriaLabel="next"
      previousAriaLabel="prev"
      pageCount={pageCount}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      data-test="paginate"
    />
  );
};
