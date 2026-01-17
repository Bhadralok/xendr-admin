import emergency from "../assets/emergencyinactive.svg";
import ActivityCard from "../Components/ActivityCard";
export default function Emergency() {
  return (
    <div>
      <ActivityCard
        icon={emergency}
        title="Emergency Management"
        description="Showing all incoming emergency alerts received today - 17/05/2025 "
        dataTitle="No emergency alerts"
        dataDescription="When any user or rider triggers emergency mode, the information will appear here"
        isDropdown={true}
        isButton={false}
      />
    </div>
  );
}
