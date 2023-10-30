import { useState } from "react";
import { useUser } from "../hooks/useUser";

function UpdateUserDataForm() {

    const { user } = useUser();

    const { email } = user;

    const [fullName, setFullName] = useState(user.user_metadata.fullName);
    const [avatar, setAvatar] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (!fullName) return;
    }

    function handleCancel() {
        setFullName(user.user_metadata.fullName);
        setAvatar(null);
    }

    return (
        <form>
            <div className="flex items-center justify-center mt-16 dark:bg-gray-800">
                <div className="mx-auto w-full max-w-[550px]">
                    <form className="py-4 px-9">
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
                                placeholder="example@domain.com"
                                className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-gray-900 dark:text-white">
                                Upload avatar image
                            </label>
                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" />
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
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Update account
                            </button>
                            <button onClick={handleCancel} className="hover:shadow-form w-full rounded-md bg-[#dc2626] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    )
}

export default UpdateUserDataForm
