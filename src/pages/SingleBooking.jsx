import Spinner from "../ui/Spinner";
import { useSingleBooking } from "../hooks/useSingleBooking"
import { format, isToday } from 'date-fns';
import { formatCurrency } from '../utils/helpers';
import { formatDistanceFromNow } from '../utils/helpers';
import { MdOutlineBreakfastDining, MdOutlinePermIdentity, MdOutlineDriveFileRenameOutline, MdCabin, MdOutlineEmojiFlags } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import { useMoveBack } from "../hooks/useMoveBack"
import StatusBadge from "../ui/StatusBadge";

function Booking() {
    const { isLoading, singleBooking } = useSingleBooking();
    const moveBack = useMoveBack();

    console.log(singleBooking);

    if (isLoading) {
        return <Spinner />;
    }

    return (
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
                    {/* <div className="mt-8">
                        <div className="flex items-center">
                            <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                                &amp; What's not
                            </h4>
                        </div>
                        <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                            <li className="flex items-start lg:col-span-1">
                                <div className="flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={6}
                                        height={6}
                                        className="w-6 h-6 mr-2"
                                        fill="red"
                                        viewBox="0 0 1792 1792"
                                    >
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                    </svg>
                                </div>
                                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                    No Contracts. No monthly, setup, or additional payment processor
                                    fees
                                </p>
                            </li>
                            <li className="flex items-start lg:col-span-1">
                                <div className="flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={6}
                                        height={6}
                                        className="w-6 h-6 mr-2"
                                        fill="red"
                                        viewBox="0 0 1792 1792"
                                    >
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                    </svg>
                                </div>
                                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                    No 2-week on-boarding, it takes 20 minutes!
                                </p>
                            </li>
                        </ul>
                    </div> */}
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
                        <div className="rounded-md shadow flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
                            <button
                                type="button"
                                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                            >
                                Check in
                            </button>
                            <button
                                type="button"
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
    )
}

export default Booking
