import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../services/apiAuth";
import { toast } from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { isLoading: isUpdating, mutate: updateUser } = useMutation({
        mutationFn: updateCurrentUser,

        onSuccess: () => {
            toast.success("User account updated successfully"),
                queryClient.invalidateQueries({
                    queryKey: ["user"]
                })
        },

        onError: () => {
            toast.error("User account could not be updated")
        }
    })

    return { isUpdating, updateUser }
}