import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import prev from '/prev.svg'
import next from '/next.svg'

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.pagination}
    breakLabel="..."
    nextLabel={<img src={next} alt='next'/>}
    previousLabel={<img src={prev} alt='prev'/>}
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);