import DashboardCard from "../Components/DashboardCard";
import helmet from "../assets/helmet.svg";
export default function Dashboard() {
  return (
    <div className="flex w-fit gap-4 ">
      <div className="w-[20vw] flex flex-col gap-4">
        <div className="h-62.5 flex gap-4 bg-amber-100 w-full">
          <DashboardCard percentage="0" />
          <DashboardCard percentage="0" />
        </div>
        <div className="w-full gap-4 ">
          <DashboardCard
            isHorizontal={true}
            icon={helmet}
            title="Total Xend Requests"
            value="0"
            percentage="0"
          />
          <DashboardCard
            isHorizontal={true}
            icon={helmet}
            title="Riders Online"
            value="0"
          />
        </div>
      </div>
      <div className="w-[80vw] bg-red-500">
        <h1>something</h1>
      </div>
    </div>
  );
}
