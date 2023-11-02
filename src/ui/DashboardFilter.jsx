import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function DashboardFilter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const last = searchParams.get("last");
    const [activeTab, setActiveTab] = useState(last);

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue);
    };

    const handleDashboardFilter = function (value) {
        searchParams.set("last", value);
        setSearchParams(searchParams);
        setActiveTab(value);
    }

    return (
        <div className="relative">
            <div className="sm:block bg-gray-50 border-gray-200 dark:border-gray-700 dark:bg-gray-800 mx-5 mt-5">
                <nav
                    className="filteringDiscount:flex-col flex flex-row items-end justify-end space-x-2 border-b dark:border-gray-700"
                    aria-label="Tabs"
                    role="tablist"
                >
                    <button
                        type="button"
                        className={`${activeTab === '7'
                            ? 'w-full disabled:cursor-not-allowed filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg hover:text-blue-600 dark:hover:text-gray-400 dark:border-gray-700 active'
                            : 'w-full filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg dark:text-white dark:border-gray-700'
                            } `}
                        id="hs-tab-to-select-item-1"
                        onClick={() => {
                            handleDashboardFilter("7");
                            handleTabChange('7');
                        }}
                        role="tab"
                        aria-selected={activeTab === '7'}
                        disabled={activeTab === '7'}
                    >
                        Last 7 days
                    </button>
                    <button
                        type="button"
                        className={`${activeTab === '30'
                            ? 'w-full disabled:cursor-not-allowed filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none hover:text-blue-600 dark:hover:text-gray-400 dark:border-gray-700 active'
                            : 'w-full filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none dark:text-white dark:border-gray-700'
                            } `}
                        id="hs-tab-to-select-item-2"
                        onClick={() => {
                            handleDashboardFilter("30");
                            handleTabChange("30");
                        }}
                        role="tab"
                        aria-selected={activeTab === '30'}
                        disabled={activeTab === '30'}
                    >
                        last 30 day
                    </button>
                    <button
                        type="button"
                        className={`${activeTab === '90'
                            ? 'w-full disabled:cursor-not-allowed filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none hover:text-blue-600 dark:hover:text-gray-400 dark:border-gray-700 active'
                            : 'w-full filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg filteringDiscount:rounded-t-none dark:text-white dark:border-gray-700'
                            } `}
                        id="hs-tab-to-select-item-3"
                        onClick={() => {
                            handleDashboardFilter("90");
                            handleTabChange("90");
                        }} role="tab"
                        aria-selected={activeTab === '90'}
                        disabled={activeTab === '90'}
                    >
                        last 90 days
                    </button>
                </nav>
            </div>
            <div>
                <div
                    id="hs-tab-to-select-1"
                    role="tabpanel"
                    aria-labelledby="hs-tab-to-select-item-1"
                    className={activeTab === '7' ? '' : 'hidden'}
                >
                </div>
                <div
                    id="hs-tab-to-select-2"
                    role="tabpanel"
                    aria-labelledby="hs-tab-to-select-item-2"
                    className={activeTab === '30' ? '' : 'hidden'}
                >
                </div>
                <div
                    id="hs-tab-to-select-3"
                    role="tabpanel"
                    aria-labelledby="hs-tab-to-select-item-3"
                    className={activeTab === '90' ? '' : 'hidden'}
                >
                </div>
            </div>
        </div >
    )
}

export default DashboardFilter
