import { Link, useNavigate } from "react-router-dom";
import { useGetLastFiveBookings } from "../hooks/useLastFiveBookings";
import Spinner from "./Spinner";
import StatusBadge from "./StatusBadge";
import { useCheckOut } from "../hooks/useCheckOut";

function LatestFiveBookingList() {
    const { isLoading, fiveBookings } = useGetLastFiveBookings();
    const { checkOut, isCheckingOut } = useCheckOut();
    const navigate = useNavigate();

    if (isLoading) {
        return <Spinner />;
    }

    console.log(fiveBookings?.data);

    return (
        <div className="w-full ">
            <h1 className="text-clamp text-center mt-10 mb-10 text-3xl font-semibold font-Ubuntu dark:text-white">
                Latest 5 Bookings
            </h1>
            {fiveBookings && fiveBookings.data.length > 0 ? (
                <div className="mx-5">
                    {fiveBookings?.data.map((booking) => (
                        <article
                            key={booking.id}
                            className="border rounded-t-lg rounded-b-lg border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                        >
                            <div className="flex items-center justify-between gap-y-4 dashboardStats:flex-col">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    {booking?.guests.countryFlag ? <img className="max-w-[2rem] rounded-sm block" src={booking?.guests.countryFlag} /> : ""}
                                </p>
                                <StatusBadge status={booking?.status} />
                                <div>
                                    <p className="text-2xl text-center font-medium text-gray-900 dark:text-white">{booking.guests.fullName}</p>
                                </div>
                                <p className="text-2xl font-medium text-gray-900 dark:text-white">{booking.numberNights} nights</p>
                                {
                                    (booking.status === "checked-out" || booking.status === "unconfirmed") && (
                                        <button
                                            onClick={() => navigate(`/bookings/${booking.id}`)}
                                            type="button"
                                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        >
                                            See details
                                        </button>
                                    )
                                }
                                <span
                                >
                                    {
                                        booking.status === "checked-in" && <button
                                            onClick={() => checkOut(booking.id)}
                                            disabled={isCheckingOut}
                                            type="button"
                                            data-hs-overlay="#hs-modal-signup"
                                            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1 text-center ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Check out
                                        </button>
                                    }
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                "Oops 😢"
            )}
        </div>
    );
}

export default LatestFiveBookingList;
