import ActivityCard from "../Components/ActivityCard";
import DashboardCard from "../Components/DashboardCard";
import helmet from "../assets/helmet.svg";
import paperxend from "../assets/paperxend.svg";
import activity from "../assets/activityicon.svg";
import { useContext, useState } from "react";
import { CollapseContext } from "../Context/CollapsedContext";
// import ProgressBar from "../UI/ProgressBar";
import ActivityButton from "../UI/ActivityButton";
import ActivityCardTable from "../Components/DashboardTable";
import { DataContext } from "../Context/DataContext";

export default function Dashboard() {
  const { collapsed } = useContext(CollapseContext);
  const { data, deliveryData } = useContext(DataContext);
  return (
    <div className={`${collapsed ? "w-full" : "w-[83vw]"}  remove-scrollbar `}>
      <div className="flex h-full gap-4 ">
        <div className=" flex flex-col gap-4">
          <div className="h-62.5 flex gap-4">
            <DashboardCard
              icon={helmet}
              title="Total Xend Requests"
              value="0"
              percentage="0"
            />
            <DashboardCard
              icon={helmet}
              title="Total Xend Requests"
              value="0"
              percentage="0"
            />
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
        <div className="w-full">
          <ActivityCard icon={paperxend} data={data} />
        </div>
      </div>
      <div className=" mt-4">
        <div className="w-full flex flex-col gap-4"></div>
        <ActivityCardTable
          isDropdown={true}
          isButton={false}
          deliveryData={deliveryData}
          icon={activity}
        />
      </div>
    </div>
  );
}
