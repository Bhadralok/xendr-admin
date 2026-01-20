import ActivityCard from "../Components/ActivityCard";
import paperxend from "../assets/paperxend.svg";
import activity from "../assets/activityicon.svg";
export default function Activity() {
  return (
    <div className="h-full flex flex-col gap-4">
      <ActivityCard icon={paperxend} data={data} />
      <ActivityCard isDropdown={true} icon={activity} isButton={false} />
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
    state: "done",
  },
  {
    id: "2",
    user: "Segun", // Corrected based on screenshot (2nd item was also Segun)
    xendId: "2291-10B",
    timeAgo: "30s ago",
    progress: 20,
    status: "Waiting for Rider",
    subStatus: "Waiting for Rider",
    state: "active", // Added for the orange state
  },
  {
    id: "3",
    user: "Isaac",
    xendId: "2291-10B",
    timeAgo: "15m ago",
    progress: 900,
    status: "Waiting for Rider",
    subStatus: "Waiting for user to xend",
    state: "pending",
  },
  {
    id: "4",
    user: "Bhadralok",
    xendId: "2291-10B",
    timeAgo: "15m ago",
    progress: 80,
    status: "Waiting for Rider",
    subStatus: "Waiting for Rider",
    state: "active",
  },
  {
    id: "5",
    user: "Bhadralok",
    xendId: "2291-10B",
    timeAgo: "15m ago",
    progress: 80,
    status: "Completed",
    subStatus: "Waiting for Rider",
    state: "active",
  },
];
