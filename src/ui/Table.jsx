import Spinner from "../ui/Spinner";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import { useDeleteCabin } from "../hooks/useDeleteCabin";
import { useCabin } from "../hooks/useCabin";
import { useCreateCabin } from "../hooks/useCreateCabin";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import FilterCabinDiscount from "./FilterCabinDiscount";
import { useSearchParams } from "react-router-dom";

function Table() {
    const [showForm, setShowForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [editingCabin, setEditingCabin] = useState(null);
    const [cabinId, setCabinId] = useState(null);
    const [editingMode, setEditingMode] = useState(false);
    const [searchParams] = useSearchParams();

    const { isDeleting, deleteCabin } = useDeleteCabin();
    const { createCabin } = useCreateCabin();
    const { isLoading, cabins } = useCabin();
    const filterValue = searchParams.get("discount") || "all";

    if (!cabins) {
        return <Spinner />;
    }

    let filteredCabins;

    if (filterValue === "all") {
        filteredCabins = cabins;
    }

    if (filterValue === "no-discount") {
        filteredCabins = cabins.filter(cabin => cabin.discount === 0)
    }

    if (filterValue === "with-discount") {
        filteredCabins = cabins.filter(cabin => cabin.discount > 0)
    }

    const handleDuplicateCabin = (cabin) => {
        const duplicatedCabin = {
            name: `Copy of ${cabin.name}`,
            maxCapacity: cabin.maxCapacity,
            regularPrice: cabin.regularPrice,
            description: cabin.description,
            discount: cabin.discount,
            image: cabin.image,
        };

        createCabin(duplicatedCabin);
    };

    const handleDeleteCabin = (cabinId) => {
        console.log("Delete button clicked for cabinId:", cabinId);
        deleteCabin(cabinId);
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center mobile:mx-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                    <FilterCabinDiscount />
                    <div className="max-w-full relative overflow-x-auto shadow-md">
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
                                {filteredCabins.map((cabin) => (
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
                                            {cabin.discount ? <p className="text-green-700">${cabin.discount}</p> : <p className="text-green-700 pl-4">&mdash;</p>}
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
                                                        onClick={() => handleDuplicateCabin(cabin)}
                                                        type="button"
                                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                    >
                                                        Duplicate
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setEditingCabin(null);
                                                            setEditingMode(false);
                                                            setShowForm(true);
                                                        }
                                                        }
                                                        type="button"
                                                        data-hs-overlay="#hs-modal-signup"
                                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                    >
                                                        Add
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setEditingCabin(cabin);
                                                            setShowForm(true);
                                                            setEditingMode(true);
                                                        }}
                                                        type="button"
                                                        data-hs-overlay="#hs-modal-signup"
                                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        disabled={isDeleting}
                                                        data-hs-overlay="#hs-danger-alert"
                                                        onClick={() => {
                                                            // deleteCabin(cabin.id)
                                                            console.log("Delete button clicked with cabinId:", cabin.id);
                                                            setCabinId(cabin.id);
                                                            setShowDeleteForm(true);
                                                        }}
                                                        className="disabled:cursor-not-allowed flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
            </div >
            {showForm && <CreateCabinForm editingCabin={editingCabin} editingMode={editingMode} />
            }
            {showDeleteForm && <ConfirmDeleteModal isDeleting={isDeleting} onDeleteCabin={handleDeleteCabin} cabinId={cabinId} />}
        </>
    );
}

export default Table;
