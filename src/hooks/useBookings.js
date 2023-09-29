import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Filter
    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

    // Sort
    const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy = { field, direction };

    const { isLoading, data: bookings, error } = useQuery({
        queryKey: ["booking", filter, sortBy],
        queryFn: () => getBookings({ filter, sortBy }),
    })

    return { isLoading, error, bookings }
}