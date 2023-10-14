import { useEffect, useState } from "react";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";
import toast from "react-hot-toast";

function CheckConnection() {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateOnlineStatus = () => {
            setOnline(navigator.onLine);
        };

        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, []);

    return (
        <div>
            {online ? (
                <div>
                    {toast("Hello, You are online now", {
                        icon: <HiOutlineStatusOnline />,
                    })}
                </div>
            ) : (
                <div>
                    {toast("Bye, You are offline now", {
                        icon: <HiOutlineStatusOffline />,
                    })}
                </div>
            )}
        </div>
    );
}

export default CheckConnection;
