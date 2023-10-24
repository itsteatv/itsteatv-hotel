import { CiLogout } from "react-icons/ci"
import { useLogout } from "../hooks/useLogout"
import Spinner from "../ui/Spinner"

function Logout() {
    const { isLoading, logout } = useLogout();

    return (
        <div aria-disabled={isLoading} onClick={logout} className="disabled:cursor-not-allowed cursor-pointer flex items-center flex-col">
            {!isLoading ? <CiLogout className="dark:text-white" /> : <Spinner />}
        </div>
    )
}

export default Logout
