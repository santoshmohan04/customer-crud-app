import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    );
};
Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;