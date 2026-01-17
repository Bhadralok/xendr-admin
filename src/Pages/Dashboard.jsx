import ActivityCard from "../Components/ActivityCard";
import DashboardCard from "../Components/DashboardCard";
import helmet from "../assets/helmet.svg";
import paperxend from "../assets/paperxend.svg";
import activity from "../assets/activityicon.svg";
import { useContext } from "react";
import { CollapseContext } from "../Context/CollapsedContext";

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
          <ActivityCard icon={paperxend} />
        </div>
      </div>
      <div className=" mt-4">
        <ActivityCard isDropdown={true} isButton={false} icon={activity} />
      </div>
    </div>
  );
}
