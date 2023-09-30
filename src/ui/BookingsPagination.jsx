import { useSearchParams } from 'react-router-dom';

const PAGE_SIZE = 10;

function BookingsPagination({ count }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const pageCount = Math.ceil(count / PAGE_SIZE);
    console.log((currentPage - 1) * PAGE_SIZE + 1);

    const nextPage = function () {
        const next = currentPage === pageCount ? currentPage : currentPage + 1;
        searchParams.set("page", next);
        setSearchParams(searchParams);
    }
    const prevPage = function () {
        const prev = currentPage === 1 ? currentPage : currentPage - 1;
        searchParams.set("page", prev);
        setSearchParams(searchParams);
    }

    if (pageCount <= 1) {
        return null;
    }

    return (
        <>
            <div className="flex flex-col items-center">
                {/* Help text */}
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">{currentPage === pageCount ? count : currentPage * PAGE_SIZE}</span> of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">{count}</span>{" "}
                    Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    {/* Buttons */}
                    <button onClick={prevPage} disabled={currentPage === 1} className="disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-600 mb-4 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg
                            className="w-3.5 h-3.5 mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 5H1m0 0 4 4M1 5l4-4"
                            />
                        </svg>
                        Prev
                    </button>
                    <button onClick={nextPage} disabled={currentPage === pageCount} className="disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-600 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>

    )
}

export default BookingsPagination
