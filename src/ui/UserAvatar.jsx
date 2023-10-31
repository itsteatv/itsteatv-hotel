import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom"

function UserAvatar() {
    const navigate = useNavigate();
    const { user } = useUser();
    const { fullName, avatar, email } = user.user_metadata;
    console.log(user);

    return (
        <div>
            <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                    <img
                        onClick={() => navigate("/account")}
                        className="inline-block flex-shrink-0 h-[2rem] w-[2rem] rounded-full cursor-pointer"
                        src={avatar || "https://wbwcdwquffnvigyndarr.supabase.co/storage/v1/object/public/avatars/default-user.jpg"}
                        alt={`Avatar of ${fullName}`}
                    />
                    <div className="ml-3">
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                            {fullName}
                        </h3>
                        <p className="text-sm font-medium text-gray-400 dark:text-white">{email}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserAvatar
