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
                <option value="startDate-desc">Sort by date (recent first)</option>
                <option value="startDate-asc">Sort by date (earlier first)</option>
                <option value="totalPrice-desc">Sort by amount (high first)</option>
                <option value="totalPrice-asc">Sort by amount (low first)</option>
            </select>
        </>
    );
}

export default SortBy;
