import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { useUpdateUser } from "../hooks/useUpdateUser";

function UpdateUserDataForm() {

    const { isUpdating, updateUser } = useUpdateUser();
    const { user: { email, user_metadata: { fullName: currentFullName }, }, } = useUser();

    const [fullName, setFullName] = useState(currentFullName);
    const [avatar, setAvatar] = useState(null);
    const [hasChanges, setHasChanges] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!fullName) return;

        updateUser({ fullName, avatar }, {
            onSettled: () => {
                setAvatar(null);
                e.target.reset();
            }
        })
    }

    function handleCancel() {
        setFullName(currentFullName);
        setAvatar(null);
    }

    useEffect(() => {
        if (fullName !== currentFullName || avatar !== null) {
            setHasChanges(true);
        } else {
            setHasChanges(false);
        }
    }, [fullName, avatar, currentFullName]);

    return (
        <div className="flex items-center justify-center mt-16 dark:bg-gray-800">
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleSubmit} className="py-4 px-9">
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-gray-900 dark:text-white"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            disabled
                            placeholder="example@domain.com"
                            className="disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="full-name"
                            className="mb-3 block text-base font-medium text-gray-900 dark:text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            disabled={isUpdating}
                            className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6 pt-4">
                        <label className="mb-5 block text-xl font-semibold text-gray-900 dark:text-white">
                            Upload avatar image
                        </label>
                        <div className="mb-8">
                            <input disabled={isUpdating} type="file" name="file" id="file" onChange={(e) => setAvatar(e.target.files[0])} className="sr-only" />
                            <label
                                htmlFor="file"
                                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                            >
                                <div>
                                    <span className="mb-2 block text-xl font-semibold text-gray-900 dark:text-white">
                                        Drop files here
                                    </span>
                                    <span className="mb-2 block text-base font-medium text-gray-900 dark:text-white">
                                        Or
                                    </span>
                                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-gray-900 dark:text-white">
                                        Browse
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <button disabled={!hasChanges || isUpdating} className="disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-gray-300 disabled:dark:opacity-50 disabled:dark:text-black disabled:text-black text-white duration-300 w-full bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Update account
                        </button>
                        <button disabled={!hasChanges || isUpdating} onClick={handleCancel} className="disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-gray-300 disabled:dark:opacity-50 disabled:dark:text-black disabled:text-black text-white duration-300 w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUserDataForm
