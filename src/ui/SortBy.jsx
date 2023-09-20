import { useSearchParams } from "react-router-dom";

function SortBy() {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortBy = searchParams.get("sortBy") || "";

    const handleSortBy = function (e) {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <>
            <label htmlFor="underline_select" className="sr-only">
                Underline select
            </label>
            <select
                onChange={handleSortBy}
                value={sortBy}
                id="underline_select"
                className="block py-2.5 px-3 w-full text-sm text-gray-500 font-medium bg-transparent border-0 dark:border border-b-2 dark:border-b-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
                <option value="name-asc">Sort by name (A-Z)</option>
                <option value="name-desc">Sort by name (Z-A)</option>
                <option value="regularPrice-asc">Sort by price (low first)</option>
                <option value="regularPrice-desc">Sort by price (high first)</option>
                <option value="maxCapacity-asc">Sort by capacity (low first)</option>
                <option value="maxCapacity-desc">Sort by capacity (high first)</option>
            </select>
        </>
    );
}

export default SortBy;
