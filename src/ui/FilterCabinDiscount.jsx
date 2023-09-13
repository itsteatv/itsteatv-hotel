import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterCabinDiscount() {
    const [searchParams, setSearchParams] = useSearchParams();
    const discount = searchParams.get("discount");
    const [activeTab, setActiveTab] = useState(discount);

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue);
    };

    const handleDiscountFilter = function (value) {
        setSearchParams({ discount: value });
        setActiveTab(value);
    }

    return (
        <div className="relative">
            <div className="sm:block bg-gray-50 border-gray-200 dark:border-gray-700">
                <nav
                    className="filteringDiscount:flex-col flex flex-row items-end justify-end space-x-2 border-b"
                    aria-label="Tabs"
                    role="tablist"
                >
                    <button
                        type="button"
                        className={`${activeTab === 'all'
                            ? 'filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg hover:text-blue-600 dark:hover:text-gray-400 active'
                            : 'filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg '
                            } `}
                        id="hs-tab-to-select-item-1"
                        onClick={() => {
                            handleDiscountFilter("all");
                            handleTabChange('all');
                        }}
                        role="tab"
                        aria-selected={activeTab === 'all'}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className={`${activeTab === 'no-discount'
                            ? 'filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg hover:text-blue-600 dark:hover:text-gray-400 active'
                            : 'filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg '
                            } `}
                        id="hs-tab-to-select-item-2"
                        onClick={() => {
                            handleDiscountFilter("no-discount");
                            handleTabChange("no-discount");
                        }}
                        role="tab"
                        aria-selected={activeTab === 'no-discount'}
                    >
                        No discount
                    </button>
                    <button
                        type="button"
                        className={`${activeTab === 'with-discount'
                            ? 'filteringDiscount:w-full text-blue-400 py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg hover:text-blue-600 dark:hover:text-gray-400 active'
                            : 'filteringDiscount:w-full py-3 px-4 inline-flex items-center gap-2 text-sm font-medium text-center border border-b-0 border-t-1 border-r-1 border-l-1 rounded-t-lg '
                            } `}
                        id="hs-tab-to-select-item-3"
                        onClick={() => {
                            handleDiscountFilter("with-discount");
                            handleTabChange("with-discount");
                        }} role="tab"
                        aria-selected={activeTab === 'with-discount'}
                    >
                        With discount
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
                    className={activeTab === 'with-discount' ? '' : 'hidden'}
                >
                </div>
            </div>
        </div >
    );
}

export default FilterCabinDiscount;
