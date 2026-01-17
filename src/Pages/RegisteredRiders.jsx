import add from "../assets/add.svg";
import LiveDataButton from "../UI/LiveDataButton";
import rider from "../assets/helmetinactive.svg";
import { AiOutlinePlus } from "react-icons/ai";
import ActivityCard from "../Components/ActivityCard";

export default function RegisteredRiders() {
  return (
    <>
      <div>
        <ActivityCard
          icon={rider}
          title="Registered Riders"
          hasCounter
          description="Showing all riders registered today - 17/05/2025"
          dataTitle="No rider added"
          dataDescription="No rider has signed up or has been added yet"
          buttonStyle={"bg-primary-orange"}
          buttonIcon={add}
          isDropdown={true}
          buttonText="Add a Rider"
          textStyle="text-white"
        />
      </div>
    </>
  );
}

const data = null;

const dropdown = [
  {
    id: 1,
    title: "Today",
  },
  {
    id: 2,
    title: "This Week",
  },
  {
    id: 3,
    title: "Months",
  },
  {
    id: 4,
    title: "Years",
  },
];
