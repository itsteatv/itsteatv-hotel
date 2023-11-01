import { useRecentBookings } from "../hooks/useRecentBookings"
import { useRecentStays } from "../hooks/useRecentStays";
import DashboardFilter from "../ui/DashboardFilter"
import Spinner from "../ui/Spinner"
import DashboardStats from "../ui/DashboardStats";
import { useCabin } from "../hooks/useCabin";

function Dashboard() {
  const { isLoading, recentBookings } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStays, numDays } = useRecentStays();
  const { isLoading: isCabinLoading, cabins } = useCabin();

  if (isLoading || isLoadingStays) {
    return <Spinner />;
  }


  return (
    <>
      <DashboardFilter />
      <DashboardStats recentBookings={recentBookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins?.length} />
      <div className="dark:text-white flex flex-row items-center justify-between mt-10 ml-10 mr-10 font-Ubuntu">
        <div>Statistic</div>
        <div>Today's activity</div>
        <div>Chart  stay durations</div>
        <div>Chart sales</div>
      </div>
    </>
  )
}

export default Dashboard
