import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckIn() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: checkIn, isLoading: isCheckingIn, isError: isCheckInError } = useMutation({
        mutationFn: ({ bookingId, breakfast }) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true,
            ...breakfast
        }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked in`),
                queryClient.invalidateQueries({
                    active: true,
                })
            navigate("/");
            window.location.reload();
        },

        onError: () => {
            toast.error("An error occurred while checking in")
        }
    });

    return { checkIn, isCheckInError, isCheckingIn }
}