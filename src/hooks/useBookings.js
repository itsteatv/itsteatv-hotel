import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Filter
    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

    const { isLoading, data: bookings, error } = useQuery({
        queryKey: ["booking", filter],
        queryFn: () => getBookings({ filter })
    })

    return { isLoading, error, bookings }
}