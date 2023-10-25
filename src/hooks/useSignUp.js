import { useMutation } from "@tanstack/react-query"
import { signUp as signUpApi } from "../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function useSignUp() {
    const navigate = useNavigate();

    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: ({ fullName, email, password }) => signUpApi({ fullName, email, password }),

        onSuccess: () => {
            toast.success("Account have been successfully created! Please verify your account"),
                navigate("/dashboard", { replace: true })
        },
    })

    return { signUp, isLoading }
}