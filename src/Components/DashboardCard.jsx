import { FaArrowUp } from "react-icons/fa";
export default function DashboardCard({
  icon,
  title = "",
  value,
  percentage,
  isHorizontal,
}) {
  return (
    <div>
      {isHorizontal ? (
        <div className="w-full  flex justify-between shadow-bg py-7.5 px-5 rounded-2xl">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium text-primary-grey">{title}</p>
            <div className="flex gap-1.5 items-end">
              <p className="font-bold text-primary-black text-3xl">{value}</p>

              {percentage && (
                <p className="flex text-primary-grey items-center text-[10px]">
                  {<FaArrowUp color="#707070" />} {percentage}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <img src={icon} alt="" className="w-8.75" />
          </div>
        </div>
      ) : (
        <div className="max-w-full  bg-green-100 flex flex-col justify-between shadow-bg py-7.5 px-5 rounded-2xl h-62.5">
          <div>
            <img src={icon} alt="" className="w-8.75" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium text-primary-grey">{title}</p>
            <div className="flex gap-1.5 items-end">
              <p className="font-bold text-primary-black text-3xl">{value}</p>
              {percentage && (
                <p className="flex text-primary-grey">
                  {<FaArrowUp color="#707070" />} {percentage}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
