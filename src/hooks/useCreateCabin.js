import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../services/apiCabins"
import { toast } from "react-hot-toast"

export function useCreateCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isAdding, mutate: createCabin } = useMutation({
        mutationFn: createEditCabin,

        onSuccess: () => {
            toast.success("New cabin successfully created"),
                queryClient.invalidateQueries({
                    queryKey: ["cabin"]
                })
        },

        onError: () => {
            toast.error("Cabin Could not be added")
        }
    })

    return { isAdding, createCabin }
}