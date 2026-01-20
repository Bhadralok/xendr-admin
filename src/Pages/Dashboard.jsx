import ActivityCard from "../Components/ActivityCard";
import DashboardCard from "../Components/DashboardCard";
import helmet from "../assets/helmet.svg";
import paperxend from "../assets/paperxend.svg";
import activity from "../assets/activityicon.svg";
import { useContext, useState } from "react";
import { CollapseContext } from "../Context/CollapsedContext";
// import ProgressBar from "../UI/ProgressBar";
import ActivityButton from "../UI/ActivityButton";

export default function Dashboard() {
  const { collapsed } = useContext(CollapseContext);

  return (
    <div className={`${collapsed ? "w-full" : "w-[84vw]"} `}>
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
        <div className="w-[68.8vw]">
          <ActivityCard icon={paperxend} data={data}/>
        </div>
      </div>
      <div className=" mt-4">
        <div className="w-[50vw] flex flex-col gap-4">

        </div>
        <ActivityCard isDropdown={true} isButton={false} icon={activity} />
      </div>
    </div>
  );
}
const data = [
  {
    id: "1",
    user: "Segun",
    xendId: "2291-10B",
    timeAgo: "10s ago",
    progress: 100,
    status: "Completed",
    subStatus: "Completed",
    state: "done", // for coloring
  },
  {
    id: "2",
    user: "Isaac",
    xendId: "2291-10B",
    timeAgo: "15m ago",
    progress: 20,
    status: "Pending",
    subStatus: "Waiting for user to xend",
    state: "pending",
  },
  {
    id: "3",
    user: "Ochuko",
    xendId: "2291-10B",
    timeAgo: "35m ago",
    progress: 20,
    status: "Pending",
    subStatus: "Waiting for user to xend",
    state: "pending",
  },
  {
    id: "4",
    user: "Ochuko",
    xendId: "2291-10B",
    timeAgo: "35m ago",
    progress: 20,
    status: "Pending",
    subStatus: "Waiting for user to xend",
    state: "pending",
  },
  {
    id: "5",
    user: "Ochuko",
    xendId: "2291-10B",
    timeAgo: "35m ago",
    progress: 20,
    status: "Completed",
    subStatus: "Waiting for user to xend",
    state: "pending",
  },
];
