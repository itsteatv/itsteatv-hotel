import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,

        onSuccess: () => {
            queryClient.removeQueries();
            toast.success("You've been logged out successfully"),
                navigate("/login", { replace: true });
                window.location.reload()
        },

        onError: (error) => {
            console.error(error);
            toast.error("Logout failed")
        }
    })

    return { logout, isLoading };
}