import Spinner from "../ui/Spinner";
import { useSingleBooking } from "../hooks/useSingleBooking"
import { format, isToday } from 'date-fns';
import { formatCurrency } from '../utils/helpers';
import { formatDistanceFromNow } from '../utils/helpers';
import { MdOutlineBreakfastDining, MdOutlinePermIdentity, MdOutlineDriveFileRenameOutline, MdCabin, MdOutlineEmojiFlags } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import { useMoveBack } from "../hooks/useMoveBack"
import StatusBadge from "../ui/StatusBadge";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../hooks/useCheckOut";
import ConfirmBookingDeletion from "../ui/ConfirmBookingDeletion";
import { useState } from "react";
import { useDeleteBooking } from "../hooks/useDeleteBooking";

function SingleBooking() {
    const { isLoading, singleBooking } = useSingleBooking();
    const { checkOut, isCheckingOut } = useCheckOut();
    const { deleteBooking } = useDeleteBooking();
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const navigate = useNavigate();
    const moveBack = useMoveBack();

    const handleDeleteSingleBooking = (bookingId) => {
        deleteBooking(bookingId, {
            onSettled: () => {
                navigate(-1)
            },
        });
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="flex items-center justify-center mt-8 px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
                    <div className="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
                        <h3 className="flex items-center gap-x-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                            Booking #{singleBooking?.id} <StatusBadge status={singleBooking.status} />
                        </h3>
                        <p className="mt-6 text-base leading-6 font-Inter text-gray-500 dark:text-gray-200">
                            {format(new Date(singleBooking?.startDate), 'EEE, MMM dd yyyy')} (
                            {isToday(new Date(singleBooking?.startDate))
                                ? 'Today'
                                : formatDistanceFromNow(singleBooking?.startDate)}
                            ) &mdash; {format(new Date(singleBooking?.endDate), 'EEE, MMM dd yyyy')}
                            <span className="flex mt-1 text-gray-500 ">Booked {format(new Date(singleBooking?.created_at), 'EEE, MMM dd yyyy, p')}</span>
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                                    more description
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                            </div>
                            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <MdOutlineDriveFileRenameOutline className="dark:text-white" size={25} />
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Your name : {singleBooking?.guests.fullName}
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <HiOutlineMail className="dark:text-white" size={25} />
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Email address : {singleBooking?.guests.email}
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <MdOutlinePermIdentity className="dark:text-white" size={25} />
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        National ID : {singleBooking?.guests.nationalID}
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <MdOutlineBreakfastDining className="dark:text-white" size={25} />
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Breakfast included ? {singleBooking?.hasBreakfast === true ? "Yes" : "No"}
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <MdCabin className="dark:text-white" size={25} />
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        {singleBooking?.numberNights} nights in <span className="font-Inter text-gray-400">{singleBooking?.cabins.name}</span> cabin
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <MdOutlineEmojiFlags className="dark:text-white" size={25} />
                                    </div>
                                    <p className="flex gap-x-2 ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Your from {singleBooking?.guests.countryFlag ? <img className="max-w-[2rem] rounded-sm block" src={singleBooking?.guests.countryFlag} /> : ""}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-6 py-8 mb-3 rounded-md text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                            {singleBooking?.isPaid === true ? <span className="text-green-400">Paid</span> : <span className="text-red-600">Not Paid</span>}
                        </p>
                        <div className="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
                            <span className="flex flex-col">
                                <span className="font-Inter text-sm">Total price :</span>
                                {formatCurrency(singleBooking?.totalPrice)}
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-5">
                            <span className="block font-medium text-gray-500 dark:text-gray-400">
                                More details:
                            </span>
                            <span className="inline-block font-medium text-gray-500  dark:text-gray-400">
                                {singleBooking?.hasBreakfast ?
                                    ` (${formatCurrency(singleBooking?.cabinPrice)} cabin + ${formatCurrency(
                                        singleBooking?.extrasPrice
                                    )} breakfast)`
                                    :
                                    ` (${formatCurrency(singleBooking?.cabinPrice)} cabin)`
                                }
                            </span>
                        </p>
                        <div className="mt-6">
                            <div className="rounded-md flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
                                {singleBooking.status === "unconfirmed" && <button
                                    onClick={() => navigate(`/checkIn/${singleBooking.id}`)}
                                    type="button"
                                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                                >
                                    Check in
                                </button>}
                                {singleBooking.status === "checked-in" && <button
                                    onClick={() => checkOut(singleBooking?.id)}
                                    disabled={isCheckingOut}
                                    type="button"
                                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                                >
                                    Check out
                                </button>}
                                <button
                                    type="button"
                                    data-hs-overlay="#hs-danger-alert"
                                    onClick={() => setShowDeleteForm(true)}
                                    className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                                >
                                    Delete booking
                                </button>
                                <button
                                    type="button"
                                    onClick={moveBack}
                                    className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDeleteForm && <ConfirmBookingDeletion onDeleteSingleBooking={handleDeleteSingleBooking} singleBookingId={singleBooking.id} />}
        </>
    )
}

export default SingleBooking