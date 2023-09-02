import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCabin as deleteCabinAPI } from "../services/apiCabins";

export function useDeleteCabin() {

    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: deleteCabinAPI,

        onSuccess: () => {
            toast.success("Cabin has been deleted successfully")
            queryClient.invalidateQueries({
                queryKey: ["cabin"]
            })
        },

        onError: () => {
            toast.error("Cabin Could not be deleted")
        }
    })

    return { isDeleting, deleteCabin };
}