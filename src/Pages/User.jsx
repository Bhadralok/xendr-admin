import add from "../assets/add.svg";
import LiveDataButton from "../UI/LiveDataButton";
import user from "../assets/userinactive.svg";
import { AiOutlinePlus } from "react-icons/ai";
import ActivityCard from "../Components/ActivityCard";

export default function User() {
  return (
    <>
      <div>
        <ActivityCard
          icon={user}
          title="Registered Users"
          hasCounter
          description="Showing all riders registered users - 17/05/2025"
          dataTitle="No users here"
          dataDescription="No user has signed up for Swiftxend....yet"
          isDropdown={true}
          isButton={false}
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
