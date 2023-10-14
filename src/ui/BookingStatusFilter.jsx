import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterCabinDiscount() {
    const [searchParams, setSearchParams] = useSearchParams();
    const discount = searchParams.get("status");
    const [activeTab, setActiveTab] = useState(discount);

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue);
    };

    const handleDiscountFilter = function (value) {
        if (searchParams.get("page")) {
            searchParams.set("page", 1)
        }

        searchParams.set("status", value);
        setSearchParams(searchParams);
        setActiveTab(value);

    }

    return (
        <div className="relative">
            <div className="sm:block bg-gray-50 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                <nav
                    className="filteringDiscount:flex-col flex flex-row items-end justify-end space-x-2 border-b dark:border-gray-700"
                    aria-label="Tabs"
                    role="tablist"
                >
                    <button
                        type="button"
                        className={`${activeTab === 'all'
                            ? 'w-full disabled:cursor-not-allowed filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg hover:text-blue-600 dark:hover:text-gray-400 dark:border-gray-700 active'
                            : 'w-full filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg dark:text-white dark:border-gray-700'
                            } `}
                        id="hs-tab-to-select-item-1"
                        onClick={() => {
                            handleDiscountFilter("all");
                            handleTabChange('all');
                        }}
                        role="tab"
                        aria-selected={activeTab === 'all'}
                        disabled={activeTab === 'all'}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className={`${activeTab === 'checked-out'
                            ? 'w-full disabled:cursor-not-allowed filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none hover:text-blue-600 dark:hover:text-gray-400 dark:border-gray-700 active'
                            : 'w-full filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none dark:text-white dark:border-gray-700'
                            } `}
                        id="hs-tab-to-select-item-2"
                        onClick={() => {
                            handleDiscountFilter("checked-out");
                            handleTabChange("checked-out");
                        }}
                        role="tab"
                        aria-selected={activeTab === 'checked-out'}
                        disabled={activeTab === 'checked-out'}
                    >
                        Checked out
                    </button>
                    <button
                        type="button"
                        className={`${activeTab === 'checked-in'
                            ? 'w-full disabled:cursor-not-allowed filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none hover:text-blue-600 dark:hover:text-gray-400 dark:border-gray-700 active'
                            : 'w-full filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none dark:text-white dark:border-gray-700'
                            } `}
                        id="hs-tab-to-select-item-3"
                        onClick={() => {
                            handleDiscountFilter("checked-in");
                            handleTabChange("checked-in");
                        }} role="tab"
                        aria-selected={activeTab === 'checked-in'}
                        disabled={activeTab === 'checked-in'}
                    >
                        Checked in
                    </button>
                    <button
                        type="button"
                        className={`${activeTab === 'unconfirmed'
                            ? 'w-full disabled:cursor-not-allowed filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none hover:text-blue-600 dark:hover:text-gray-400 dark:border-gray-700 active'
                            : 'w-full filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none dark:text-white dark:border-gray-700'
                            } `}
                        id="hs-tab-to-select-item-3"
                        onClick={() => {
                            handleDiscountFilter("unconfirmed");
                            handleTabChange("unconfirmed");
                        }} role="tab"
                        aria-selected={activeTab === 'unconfirmed'}
                        disabled={activeTab === 'unconfirmed'}
                    >
                        unconfirmed
                    </button>
                </nav>
            </div>
            <div>
                <div
                    id="hs-tab-to-select-1"
                    role="tabpanel"
                    aria-labelledby="hs-tab-to-select-item-1"
                    className={activeTab === 'all' ? '' : 'hidden'}
                >
                </div>
                <div
                    id="hs-tab-to-select-2"
                    role="tabpanel"
                    aria-labelledby="hs-tab-to-select-item-2"
                    className={activeTab === 'no-discount' ? '' : 'hidden'}
                >
                </div>
                <div
                    id="hs-tab-to-select-3"
                    role="tabpanel"
                    aria-labelledby="hs-tab-to-select-item-3"
                    className={activeTab === 'checked-in' ? '' : 'hidden'}
                >
                </div>
            </div>
        </div >
    );
}

export default FilterCabinDiscount;
