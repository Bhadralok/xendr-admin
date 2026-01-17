import ActivityCard from "../Components/ActivityCard";
import paperxend from "../assets/paperxend.svg";
import activity from "../assets/activityicon.svg";
export default function Activity() {
  return (
    <div className="h-full flex flex-col gap-4">
      <ActivityCard icon={paperxend} />
      <ActivityCard isDropdown={true} icon={activity} isButton={false} />
    </div>
  );
}
