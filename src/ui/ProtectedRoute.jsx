import { useNavigate } from "react-router-dom"
import { useUser } from "../hooks/useUser"
import Spinner from "./Spinner"
import { useEffect } from "react";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // Load the authenticated user
    const { isLoading, user, isAuthenticated } = useUser()

    // redirect to login if the user is not authenticated
    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/login")
    }, [isAuthenticated, isLoading, navigate])

    if (isLoading) {
        return <Spinner />
    }

    if (isAuthenticated) return children
}

export default ProtectedRoute
