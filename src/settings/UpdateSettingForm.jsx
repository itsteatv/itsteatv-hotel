import { useSettings } from "../hooks/useSettings"
import { useUpdateSetting } from "../hooks/useUpdateSetting"
import Spinner from "../ui/Spinner"

function UpdateSettingForm() {
    const { isLoading, settings } = useSettings();
    const { isUpdating, updateSetting } = useUpdateSetting();

    if (isLoading) {
        return <Spinner />;
    }

    const handleSettingUpdate = function (event, field) {
        const { value } = event.target;
        console.log(value);

        if (!value) return;

        updateSetting({
            [field]: value
        })
    }

    const { minBookingLength } = settings;
    const { maxBookingLength } = settings;
    const { maxGuestsPerBooking } = settings;
    const { breakfastPrice } = settings;

    return (
        <form>
            <div className="settingForm:m-10 max-w-[35rem] mx-auto mt-20 grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="min_nights"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Minimum nights/booking
                    </label>
                    <input
                        type="number"
                        id="min-nights"
                        disabled={isUpdating}
                        onBlur={(event) => handleSettingUpdate(event, "minBookingLength")}
                        defaultValue={minBookingLength}
                        className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="max_nights"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Maximum nights/booking
                    </label>
                    <input
                        type="number"
                        id="max-nights"
                        disabled={isUpdating}
                        onBlur={(event) => handleSettingUpdate(event, "maxBookingLength")}
                        defaultValue={maxBookingLength}
                        className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="max_guests"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Maximum guests/booking
                    </label>
                    <input
                        type="number"
                        id="max-guests"
                        disabled={isUpdating}
                        onBlur={(event) => handleSettingUpdate(event, "maxGuestsPerBooking")}
                        defaultValue={maxGuestsPerBooking}
                        className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="breakfast_price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Breakfast price
                    </label>
                    <input
                        type="number"
                        id="breakfast-price"
                        disabled={isUpdating}
                        onBlur={(event) => handleSettingUpdate(event, "breakfastPrice")}
                        defaultValue={breakfastPrice}
                        className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </div>
        </form>
    )
}

export default UpdateSettingForm
