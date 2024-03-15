import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

export default function ComplexPaginationContainer() {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  if (pageCount === 1) return;

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageNumber = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? 'bg-base-300 border-base-300' : ''
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first btn
    pageButtons.push(addPageNumber({ pageNumber: 1, activeClass: page === 1 }));

    // dots
    if (page > 2) {
      pageButtons.push(
        <button className="btn join-item btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }

    //current btn
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageNumber({ pageNumber: page, activeClass: true }));
    }

    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="btn join-item btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }

    // last btn
    pageButtons.push(
      addPageNumber({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item uppercase"
          onClick={() => {
            let previousPage = page - 1;
            if (previousPage < 1) previousPage = pageCount;
            handlePageChange(previousPage);
          }}
        >
          prev
        </button>

        {renderPageButtons()}

        <button
          className="btn btn-xs sm:btn-md join-item uppercase"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
