import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-bookings";
import { cabins } from "./data-cabins";
import { guests } from "./data-guests";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

async function deleteGuests() {
    const { error } = await supabase.from("guests").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function deleteCabins() {
    const { error } = await supabase.from("cabins").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function deleteBookings() {
    const { error } = await supabase.from("bookings").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function createGuests() {
    const { error } = await supabase.from("guests").insert(guests);
    if (error) console.log(error.message);
}

async function createCabins() {
    const { error } = await supabase.from("cabins").insert(cabins);
    if (error) console.log(error.message);
}

async function createBookings() {
    // Bookings need a guestId and a cabinId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and cabinIds, and then replace the original IDs in the booking data with the actual ones from the DB
    const { data: guestsIds } = await supabase
        .from("guests")
        .select("id")
        .order("id");
    const allGuestIds = guestsIds.map((cabin) => cabin.id);
    const { data: cabinsIds } = await supabase
        .from("cabins")
        .select("id")
        .order("id");
    const allCabinIds = cabinsIds.map((cabin) => cabin.id);

    const finalBookings = bookings.map((booking) => {
        // Here relying on the order of cabins, as they don't have and ID yet
        const cabin = cabins.at(booking.cabinId - 1);
        const numNights = subtractDates(booking.endDate, booking.startDate);
        const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
        const extrasPrice = booking.hasBreakfast
            ? numNights * 15 * booking.numGuests
            : 0; // hardcoded breakfast price
        const totalPrice = cabinPrice + extrasPrice;

        let status;
        if (
            isPast(new Date(booking.endDate)) &&
            !isToday(new Date(booking.endDate))
        )
            status = "checked-out";
        if (
            isFuture(new Date(booking.startDate)) ||
            isToday(new Date(booking.startDate))
        )
            status = "unconfirmed";
        if (
            (isFuture(new Date(booking.endDate)) ||
                isToday(new Date(booking.endDate))) &&
            isPast(new Date(booking.startDate)) &&
            !isToday(new Date(booking.startDate))
        )
            status = "checked-in";

        return {
            ...booking,
            numNights,
            cabinPrice,
            extrasPrice,
            totalPrice,
            guestId: allGuestIds.at(booking.guestId - 1),
            cabinId: allCabinIds.at(booking.cabinId - 1),
            status,
        };
    });

    console.log(finalBookings);

    const { error } = await supabase.from("bookings").insert(finalBookings);
    if (error) console.log(error.message);
}

function Uploader() {
    const [isLoading, setIsLoading] = useState(false);

    async function uploadAll() {
        setIsLoading(true);
        // Bookings need to be deleted FIRST
        await deleteBookings();
        await deleteGuests();
        await deleteCabins();

        // Bookings need to be created LAST
        await createGuests();
        await createCabins();
        await createBookings();

        setIsLoading(false);
    }

    async function uploadBookings() {
        setIsLoading(true);
        await deleteBookings();
        await createBookings();
        setIsLoading(false);
    }

    return (
        <div
            className="bg-gray-50 dark:bg-gray-800"
        >
            <h3 className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SAMPLE DATA</h3>

            <button onClick={uploadAll} disabled={isLoading}
                className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
                dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5
                text-center mr-2 mb-2"
            >
                Upload ALL
            </button>

            <button onClick={uploadBookings} disabled={isLoading}
                className="w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
                Upload bookings ONLY
            </button>
        </div>
    );
}

export default Uploader;