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
            <div className="flex items-center justify-center mt-16">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form className="py-4 px-9">
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload avatar image
                            </label>
                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label
                                    htmlFor="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
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
