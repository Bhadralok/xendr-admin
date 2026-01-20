import { TbPointFilled } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiPackageDuotone, PiPackageFill } from "react-icons/pi";
// import ProgressBar from "./ProgressBar";

export default function ActivityButton({
  isCompleted = false,
  inProgress = false,
  isPending = false,
  value,
  name,
  timeAgo,
  xendID,
}) {
  if (value > 100) {
    isCompleted = true;
    inProgress = false
  }

  return (
    <>
      {/* Button Div */}
      <div className=" p-3 border border-[#EDEDED] rounded-2xl flex w-full justify-between items-center">
        <div className="flex w-full items-center gap-2.5">
          {/* Box */}
          <div
            className={`${isCompleted && "bg-secondary-green"} ${inProgress && "bg-tertiary-orange"} ${isPending && "bg-tertiary-grey"} flex items-center shrink-0 justify-center size-17.5 rounded-2xl`}
          >
            {isCompleted && <PiPackageFill color={"#2db83d"} size={28} />}
            {inProgress && <PiPackageFill color={"#e28400"} size={28} />}
            {isPending && <PiPackageFill color={"#707070"} size={28} />}
          </div>

          {/* Text Divs */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center w-full justify-between">
              {/* Text */}
              <div>
                <p className="text-primary-black font-bold text-sm ">
                  Delivery for {name}
                </p>
                <p className="text flex items-center gap-1">
                  Xend ID: {xendID}{" "}
                  <span>
                    <TbPointFilled />
                  </span>{" "}
                  {timeAgo}
                </p>
              </div>

              {/* Arrow */}
              <div className="">
                <MdKeyboardArrowRight size={25} />
              </div>
            </div>
            <div className="w-full">
              <div>
                {isPending && (
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        background: "#eee",
                        height: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: `${100}%`,
                          background: "#707070",
                          height: "100%",
                          borderRadius: "10px",
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <div className="pt-2">
                      <p className="text flex items-center">
                        Pending <TbPointFilled /> Waiting for user to xend
                      </p>
                    </div>
                  </div>
                )}
                {isCompleted && (
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        background: "#eee",
                        height: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: `${100}%`,
                          background: "#2db83d",
                          height: "100%",
                          borderRadius: "10px",
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <div className="pt-2">
                      <p className="text flex items-center">
                        <span className="font-medium text-primary-green">
                          100%
                        </span>{" "}
                        <TbPointFilled /> Completed
                      </p>
                    </div>
                  </div>
                )}
                {inProgress && (
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        background: "#eee",
                        height: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: `${value}%`,
                          background: "#e28400",
                          height: "100%",
                          borderRadius: "10px",
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <div className="pt-2">
                      <p className="text flex items-center">
                        <span className="font-medium text-primary-orange">
                          {value}% done
                        </span>{" "}
                        <TbPointFilled /> Waiting for Rider
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
