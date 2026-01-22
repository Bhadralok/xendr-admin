import live from "../assets/live.svg";
import ActivityButton from "../UI/ActivityButton";
import LiveDataButton from "../UI/LiveDataButton";
import Dropdown from "./Dropdown";
// import TableData from "./TableData";

export default function ActivityCard({
  isButton = true,
  isDropdown,
  icon,
  data,
  title = "Xend Activity",
  description = "Showing all Xend activities as they occur real-time",
  hasCounter = false,
  dataTitle = "No xend activity at the moment",
  dataDescription = "Live activities will be displayed here.",
  buttonStyle,
  buttonText,
  textStyle,
  buttonIcon = live,
  bigTitle = false,
  deliveryData,
}) {
  if (deliveryData) {
    data = "";
  }
  return (
    <div className="py-8 px-5 shadow-bg h-full rounded-2xl">
      <div className="flex items-center justify-between">
        <div className={`${isDropdown ? "gap-3" : "gap-4"} flex flex-col `}>
          <h1
            className={`${
              bigTitle ? "text-lg font-black" : "text-3xl font-bold"
            }  text-primary-black flex gap-4 items-center`}
          >
            {title}
            {hasCounter && (
              <div className="flex items-center text-base font-black text-[#F8F8F8] justify-center bg-primary-orange size-11 rounded-2xl">
                0
              </div>
            )}
          </h1>
          <p className="text mb-7">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          {isDropdown && <Dropdown />}
          {isButton && (
            <div className="w-fit">
              <LiveDataButton
                buttonText={buttonText}
                icon={buttonIcon}
                style={buttonStyle}
                textStyle={textStyle}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        {data ? (
          <div className="flex flex-col gap-4 h-[37vh] overflow-y-auto">
            {data?.map((item) => (
              <ActivityButton
                key={item.id}
                name={item.user}
                isCompleted={item.status === "Completed"}
                isPending={item.status === "Pending"}
                inProgress={item.status === "Waiting for Rider"}
                timeAgo={item.timeAgo}
                xendID={item.xendId}
                value={item.progress}
                progress={item.progress}
              />
            ))}
          </div>
        ) : (
          <div
            className={`${
              isDropdown ? "py-20" : "pt-35"
            } flex flex-col gap-5 items-center justify-center`}
          >
            <img src={icon} alt="" className="h-7.5" />
            <div className="flex flex-col gap-1 text-center">
              <p className="text-[#565656] font-black">{dataTitle}</p>
              <p className="text">{dataDescription}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
