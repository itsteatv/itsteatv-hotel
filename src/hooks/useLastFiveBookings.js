import { useQuery } from "@tanstack/react-query";
import { getLast5Bookings } from "../services/apiBookings";

export function useGetLastFiveBookings() {
    const { isLoading, data: fiveBookings } = useQuery({
        queryFn: getLast5Bookings,
        queryKey: ["five-bookings"],
    })

    return { isLoading, fiveBookings }
}