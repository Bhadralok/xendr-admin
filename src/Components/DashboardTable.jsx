import { CgMoreO } from "react-icons/cg";
import live from "../assets/live.svg";
import LiveDataButton from "../UI/LiveDataButton";
import Dropdown from "./Dropdown";

export default function DashboardTable({
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

  const formatCurrency = (val) => `₦${val.toLocaleString()}`;

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
        {deliveryData ? (
          <div className="flex flex-col gap-4 h-full overflow-y-auto">
            <div className="w-full mt-6 h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full text-left border-collapse pb-10">
                <thead>
                  <tr className="bg-[#4A4A4A] text-white">
                    <th className="px-6 py-4 font-semibold text-sm">Xend ID</th>
                    <th className="px-6 py-4 font-semibold text-sm">
                      Rider ID
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm">
                      User email
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm">
                      Delivery Cost
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm">
                      Commission Deducted
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm">
                      Profit Gained
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 pb-10">
                  {deliveryData.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {item.xendId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                        {item.riderId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {item.userEmail}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                        {formatCurrency(item.deliveryCost)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatCurrency(item.commission.amount)} at{" "}
                        {item.commission.percentage}%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                        {formatCurrency(item.profitGained)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-1 hover:bg-gray-200 rounded-full transition-colors inline-block">
                          <CgMoreO className="text-gray-500" size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
