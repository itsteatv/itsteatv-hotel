import { CiLogout } from "react-icons/ci"
import { useLogout } from "../hooks/useLogout"
import Spinner from "../ui/Spinner"

function Logout() {
    const { isLoading, logout } = useLogout();

    return (
        <div aria-disabled={isLoading} onClick={logout} className="disabled:cursor-not-allowed cursor-pointer flex items-center flex-col">
            {!isLoading ? <div className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">Logout</div> : <Spinner />}
        </div>
    )
}

export default Logout
