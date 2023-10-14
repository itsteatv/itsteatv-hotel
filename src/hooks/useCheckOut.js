import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
    const queryClient = useQueryClient();

    const { mutate: checkOut, isLoading: isCheckingOut, isError: isCheckOutError } = useMutation({
        mutationFn: (id) => updateBooking(id, {
            status: "checked-out",
        }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked out`),
                queryClient.invalidateQueries({
                    active: true,
                })
        },

        onError: () => {
            toast.error("An error occurred while checking out")
        }
    });

    return { checkOut, isCheckingOut, isCheckOutError }
}