
import { formatCurrency } from "../utils/helpers";
import { BsFillBootstrapFill, BsFillCalendarDateFill } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { IoIosStats } from "react-icons/io";

function DashboardStats({ recentBookings, confirmedStays, numDays, cabinCount}) {

    // 1. Length of recentBookings
    const numBookings = recentBookings.length;

    // 2. Total sale
    const totalSale = recentBookings.reduce((total, booking) => total + booking.totalPrice, 0);

    // 3. Total check in
    const totalCheckIn = confirmedStays.length;

    // 4. Occupancy rate
    const occupation = confirmedStays.reduce((occupancy, booking) => occupancy + booking.numberNights, 0) / (numDays * cabinCount);

    return (
        <div className="mx-5">
            <article
                className="border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Number of bookings</p>

                        <p className="text-2xl font-medium text-gray-900 dark:text-white">{numBookings}</p>
                    </div>

                    <span
                        className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                    >
                        <BsFillBootstrapFill className="h-8 w-8" />
                    </span>
                </div>
            </article>

            <article
                className="border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total sales</p>

                        <p className="text-2xl font-medium text-gray-900 dark:text-white">{formatCurrency(totalSale)}</p>
                    </div>

                    <span
                        className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                    >
                        <SiCashapp className="h-8 w-8" />
                    </span>
                </div>
            </article>

            <article
                className="border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total check in</p>

                        <p className="text-2xl font-medium text-gray-900 dark:text-white">{totalCheckIn}</p>
                    </div>

                    <span
                        className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                    >
                        <BsFillCalendarDateFill className="h-8 w-8" />
                    </span>
                </div>
            </article>

            <article
                className="rounded-b-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Occupancy rate</p>

                        <p className="text-2xl font-medium text-gray-900 dark:text-white">{Math.round(occupation * 100)}%</p>
                    </div>

                    <span
                        className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                    >
                        <IoIosStats className="h-8 w-8" />
                    </span>
                </div>
            </article>
        </div>
    )
}

export default DashboardStats
