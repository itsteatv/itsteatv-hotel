import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins, deleteCabin } from "../services/apiCabins";
import { toast } from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { GiChoppedSkull } from "react-icons/gi";
import Spinner from "../ui/Spinner";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";

function Table() {
    const [showForm, setShowForm] = useState(false);

    const queryClient = useQueryClient();

    const { isLoading: isDeleting, isError, mutate } = useMutation({
        mutationFn: deleteCabin,

        onSuccess: () => {
            toast.success("Cabin has been deleted successfully", {
                icon: <MdDeleteForever />,
            })
            queryClient.invalidateQueries({
                queryKey: ["cabin"]
            })
        },

        onError: (error) => {
            toast.error("Cabin Could not be deleted", {
                icon: <GiChoppedSkull />,
            })
        }
    })

    const { isLoading, data: cabins, error } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins
    })

    if (isLoading) {
        return <Spinner />
    }

    console.log(cabins);

    return (
        <>
            <div className="h-screen flex items-center justify-center mobile:mx-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    CABIN
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    CAPACITY
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRICE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DISCOUNT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cabins.map((cabin) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={cabin.id}>
                                    <td>
                                        <img className="rounded w-20 m-4" src={cabin.image} alt="cabin image" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {cabin.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <p className="font-semibold text-gray-900 dark:text-white">Fits up to {cabin.maxCapacity} guests</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${cabin.regularPrice}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-green-700">${cabin.discount}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="hs-dropdown relative inline-flex">
                                            <button
                                                id="hs-dropdown-custom-icon-trigger"
                                                type="button"
                                                className="hs-dropdown-toggle p-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-gray-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <div
                                                className="z-50 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                                                aria-labelledby="hs-dropdown-custom-icon-trigger"
                                            >
                                                <button
                                                    type="button"
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                >
                                                    Duplicate
                                                </button>
                                                <button
                                                    onClick={() => setShowForm((show) => !show)}
                                                    type="button"
                                                    data-hs-overlay="#hs-modal-signup"
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                >
                                                    Add
                                                </button>
                                                <button
                                                    type="button"
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    disabled={isDeleting}
                                                    onClick={() => mutate(cabin.id)} className="disabled:cursor-not-allowed flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showForm && <CreateCabinForm />}
        </>
    );
}

export default Table;
