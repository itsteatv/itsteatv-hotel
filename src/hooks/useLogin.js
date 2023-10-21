import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();

    const { isLoading, mutate: login } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),

        onSuccess: (user) => {
            toast.success("You've been successfully logged in"),
                navigate("/dashboard")
                console.log(user);
        },

        onError: (error) => {
            console.error(error);
            toast.error("Provided email or password is incorrect")
        }
    })

    return { isLoading, login }
}