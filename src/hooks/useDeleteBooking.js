import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingAPI } from "../services/apiBookings";

export function useDeleteBooking() {

    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingAPI,

        onSuccess: () => {
            toast.success("Booking has been deleted successfully")
            queryClient.invalidateQueries({
                queryKey: ["booking"]
            })
        },

        onError: () => {
            toast.error("Booking Could not be deleted")
        }
    })

    return { isDeleting, deleteBooking };
}