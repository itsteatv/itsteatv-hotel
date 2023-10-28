import { useUser } from "../hooks/useUser";

function UserAvatar() {
    const { user } = useUser();
    const { fullName, avatar, email } = user.user_metadata;
    console.log(user);

    return (
        <div>
            <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                    <img
                        className="inline-block flex-shrink-0 h-[2rem] w-[2rem] rounded-full"
                        src={avatar || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"}
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
