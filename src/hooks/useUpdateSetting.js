import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI } from "../services/apiSetting";
import { toast } from "react-hot-toast";

export function useUpdateSetting() {
    const queryClient = useQueryClient();

    const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
        mutationFn: updateSettingAPI,

        onSuccess: () => {
            toast.success("Setting successfully edited"),
                queryClient.invalidateQueries({
                    queryKey: ["settings"]
                })
        },

        onError: () => {
            toast.error("Setting Could not be edited")
        }
    })

    return { isUpdating, updateSetting }
}