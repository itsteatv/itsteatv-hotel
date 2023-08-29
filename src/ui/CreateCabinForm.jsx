import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { createCabin } from "../services/apiCabins"
import { toast } from "react-hot-toast"
import { MdOutlineAddTask } from "react-icons/md"
import { GiChoppedSkull } from "react-icons/gi"
import('preline')

function CreateCabinForm() {
    const { register, handleSubmit, reset } = useForm();

    const queryClient = useQueryClient();

    const { isLoading: isAdding, mutate } = useMutation({
        mutationFn: createCabin,

        onSuccess: () => {
            toast.success("New cabin successfully created", {
                icon: <MdOutlineAddTask />,
            }),
                queryClient.invalidateQueries({
                    queryKey: ["cabin"]
                }),
                reset();
        },

        onError: () => {
            toast.error("Cabin Could not be added", {
                icon: <GiChoppedSkull />,
            })
        }
    })

    const onSubmitHandler = function (data) {
        mutate(data);
    }

    return (
        <>
            <div
                id="hs-modal-signup"
                className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 sm:p-7">
                            <div className="mt-5">
                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmitHandler)}>
                                    <div className="grid gap-y-4">
                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Cabin name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    {...register("name")}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                                />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg
                                                        className="h-5 w-5 text-red-500"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="maxCapacity"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Maximum capacity
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    id="maxCapacity"
                                                    name="maxCapacity"
                                                    {...register("maxCapacity")}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                                />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg
                                                        className="h-5 w-5 text-red-500"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="regularPrice"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Regular Price
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    id="regularPrice"
                                                    name="regularPrice"
                                                    {...register("regularPrice")}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                                    required=""
                                                />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg
                                                        className="h-5 w-5 text-red-500"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="discount"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Discount
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    id="discount"
                                                    name="discount"
                                                    defaultValue={0}
                                                    {...register("discount")}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                                />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg
                                                        className="h-5 w-5 text-red-500"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="description"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Description
                                            </label>
                                            <div className="relative">
                                                <textarea
                                                    type="text"
                                                    id="description"
                                                    name="description"
                                                    defaultValue=""
                                                    {...register("description")}
                                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                                />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg
                                                        className="h-5 w-5 text-red-500"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="image"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Cabin photo
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    name="file-input"
                                                    id="file-input"
                                                    className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
                                                />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg
                                                        className="h-5 w-5 text-red-500"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            disabled={isAdding}
                                            type="submit"
                                            className="disabled:cursor-not-allowed py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                        >
                                            Create new cabin
                                        </button>
                                        <button
                                            type="reset"
                                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CreateCabinForm
