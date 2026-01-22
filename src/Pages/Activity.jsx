import ActivityCard from "../Components/ActivityCard";
import paperxend from "../assets/paperxend.svg";
import activity from "../assets/activityicon.svg";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import ActivityCardTable from "../Components/DashboardTable";
export default function Activity() {
  const { data, deliveryData } = useContext(DataContext);

  return (
    <div className="h-full flex flex-col gap-4">
      <ActivityCard icon={paperxend} data={data} />
      <ActivityCardTable
        isDropdown={true}
        icon={activity}
        isButton={false}
        deliveryData={deliveryData}
      />
    </div>
  );
}
