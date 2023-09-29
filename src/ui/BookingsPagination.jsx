import { Pagination } from 'flowbite-react';
import { useState } from 'react';

function BookingsPagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    return (
        <div className="flex items-center justify-center text-center">
            <Pagination
                className="flex justify-center items-center mb-4 gap-4 extraSmall:flex-col"
                currentPage={31}
                layout="table"
                onPageChange={page => { setCurrentPage(page) }}
                showIcons
                totalPages={1000}
            />
        </div>
    )
}

export default BookingsPagination
