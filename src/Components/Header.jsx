import NavButtons from "../UI/NavButtons";
import homeactive from "../assets/homeactive.svg";
import homeinactive from "../assets/homeinactive.svg";
import eclipseactive from "../assets/eclipseactive.svg";
import eclipseinactive from "../assets/eclipseinactive.svg";
import helmetactive from "../assets/helmetactive.svg";
import helmetinactive from "../assets/helmetinactive.svg";
import useractive from "../assets/useractive.svg";
import userinactive from "../assets/userinactive.svg";
import chartactive from "../assets/chartactive.svg";
import chartinactive from "../assets/chartinactive.svg";
import emergencyactive from "../assets/emergencyactive.svg";
import emergencyinactive from "../assets/emergencyinactive.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import collapseactive from "../assets/collapseactive.svg";
import collapseinactive from "../assets/collapseinactive.svg";
import favicon from "../assets/favicon.svg";
import swift from "../assets/swifthori.svg";
import CustomInput from "../UI/CustomInput";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapsed =
    "h-15 w-15 rounded-2xl flex items-center justify-center cursor-pointer";
  const notCollapsed =
    "h-15 rounded-2xl flex items-center justify-start cursor-pointer w-full pr-20 pl-5 gap-4 bg-tertiary-orange";

  const user = {
    name: "Bhadralok",
    email: "bhadralok@bhadralok.com",
  };

  const firstLetter = user.name?.charAt(0)?.toUpperCase();
  return (
    <>
      <div className="flex h-screen">
        <div className="w-fit px-5 pt-8 shadow-xl h-full">
          <header className="flex flex-col gap-3 ">
            {isCollapsed ? (
              <div className="pb-11 pl-3.5">
                <img src={favicon} alt="" className="size-8" />
              </div>
            ) : (
              <div className="w-full pl-3.5 pb-11">
                <img src={swift} alt="" className="w-40" />
              </div>
            )}
            {data.map((item) => (
              <NavLink to={item.to} end={item.end} key={item.id}>
                {({ isActive }) => (
                  <NavButtons
                    imageInactive={item.imageInactive}
                    imageActive={item.imageActive}
                    isActive={isActive}
                    isCollapsed={isCollapsed}
                    navtext={item.navtext}
                  />
                )}
              </NavLink>
            ))}
            <button
              className={isCollapsed ? collapsed : notCollapsed}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <img
                src={isCollapsed ? collapseinactive : collapseactive}
                alt=""
              />
              {!isCollapsed && <p>Collapse</p>}
            </button>
          </header>
        </div>
        <div className="my-2 mx-4 rounded-2xl py-5 w-full px-5 h-fit">
          <div className="flex justify-between items-center ">
            <div className="w-[20vw] ">
              <CustomInput
                placeholder="Search for Xend IDs, names..."
                isSearch={true}
              />
            </div>
            <div className="text-primary-black flex items-center gap-2.5">
              <div className="text-right">
                <p className="font-black ">Hi {user.name}</p>
                <p className="font-medium text-sm text-primary-grey">
                  {user.email}
                </p>
              </div>
              <div className="size-15 bg-tertiary-orange text-primary-orange text-2xl rounded-2xl flex items-center justify-center font-black">
                {firstLetter}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    id: 1,
    imageActive: homeactive,
    imageInactive: homeinactive,
    to: "/dashboard",
    navtext: "Overview",
    end: true,
  },
  {
    id: 2,
    imageActive: eclipseactive,
    imageInactive: eclipseinactive,
    navtext: "Xends",
    to: "/dashboard/eclipse",
  },
  {
    id: 3,
    imageActive: helmetactive,
    imageInactive: helmetinactive,
    navtext: "Riders",
    to: "/dashboard/registered-riders",
  },
  {
    id: 4,
    imageActive: useractive,
    imageInactive: userinactive,
    navtext: "Users",
    to: "/dashboard/user",
  },
  {
    id: 5,
    imageActive: chartactive,
    imageInactive: chartinactive,
    navtext: "Finance",
    to: "/dashboard/chart",
  },
  {
    id: 6,
    imageActive: emergencyactive,
    imageInactive: emergencyinactive,
    navtext: "Emergency",
    to: "/dashboard/emergency",
  },
];
