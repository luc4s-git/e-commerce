import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

export default function PaginationContainer() {
  const { meta } = useLoaderData();

  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  console.log(search);
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          onClick={() => {
            let previousPage = page - 1;
            if (previousPage < 1) previousPage = pageCount;
            handlePageChange(previousPage);
          }}
          className="btn btn-xs sm:btn-md join-item uppercase"
        >
          prev
        </button>
        {pages.map((item, index) => {
          return (
            <button
              onClick={() => {
                handlePageChange(item);
              }}
              key={index}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                page === item && 'bg-base-300 border-base-300'
              }`}
            >
              {item}
            </button>
          );
        })}
        <button
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
          className="btn btn-xs sm:btn-md join-item uppercase"
        >
          next
        </button>
      </div>
    </div>
  );
}
