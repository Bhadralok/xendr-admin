import live from "../assets/live.svg";
import LiveDataButton from "../UI/LiveDataButton";

export default function ActivityCard({ data, isDropdown, icon }) {
  return (
    <div className="py-8 px-5 shadow-bg h-full rounded-2xl">
      <div className="flex items-center justify-between">
        <div className={`${isDropdown ? "gap-3" : "gap-4"} flex flex-col `}>
          <h1
            className={`${
              isDropdown ? "text-lg font-black" : "text-3xl font-bold"
            }  text-primary-black`}
          >
            Xend Activity
          </h1>
          <p className="text">
            Showing all Xend activities as they occur real-time
          </p>
        </div>
        {isDropdown ? (
          <div></div>
        ) : (
          <div className="w-fit">
            <LiveDataButton icon={live} />
          </div>
        )}
      </div>
      <div>
        {data ? (
          <div></div>
        ) : (
          <div
            className={`${
              isDropdown ? "py-20" : "pt-35"
            } flex flex-col gap-5 items-center justify-center`}
          >
            <img src={icon} alt="" className="h-7.5" />
            <p className="text-[#565656] font-black">
              No xend activity at the moment
            </p>
            <p className="text">Live activities will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

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
