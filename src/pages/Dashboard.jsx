import DashboardFilter from "../ui/DashboardFilter"

function Dashboard() {
  return (
    <>
      <DashboardFilter />
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
