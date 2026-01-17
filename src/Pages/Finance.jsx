import ActivityCard from "../Components/ActivityCard";
import chart from "../assets/chartinactive.svg";
import record from "../assets/record.svg";
import pen from "../assets/pen.svg";

export default function Finance() {
  return (
    <div className="flex flex-col gap-4">
      <ActivityCard
        title="Finance - Analysis"
        description="All monetary flow and profit analysis for Swiftxend"
        icon={chart}
        dataTitle="No financial data to show here"
        dataDescription="No financial data has been recorded yet"
        isDropdown={true}
        isButton={false}
      />
      <ActivityCard
        title="Finance Actual"
        description="All monetary flow in and out of Swiftxend"
        icon={record}
        dataTitle="No monetary flow has been recorded"
        dataDescription="No financial data has been recorded yet"
        isDropdown={true}
        isButton={true}
        buttonStyle="bg-primary-orange"
        buttonIcon={pen}
        buttonText="Edit Commisson %"
        textStyle="text-white"
      />
    </div>
  );
}
