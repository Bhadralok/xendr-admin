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
import { useContext, useState } from "react";
import collapseactive from "../assets/collapseactive.svg";
import collapseinactive from "../assets/collapseinactive.svg";
import favicon from "../assets/favicon.svg";
import swift from "../assets/swifthori.svg";
import signout from "../assets/signout.svg";
import { CollapseContext } from "../Context/CollapsedContext";

export default function SideNav() {
  const { collapsed, toggle } = useContext(CollapseContext);
  const collapse =
    "h-15 w-15 rounded-2xl flex items-center justify-center cursor-pointer";
  const notCollapsed =
    "h-15 rounded-2xl flex items-center justify-start cursor-pointer w-full pr-20 pl-5 gap-4 bg-tertiary-orange";
  return (
    <div className={collapsed ? "" : "pr-38"}>
      <div className=" fixed w-fit flex flex-col pb-10 justify-between px-5 pt-8 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.05)] h-full">
        <header className="flex flex-col gap-3 ">
          {collapsed ? (
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
                  isCollapsed={collapsed}
                  navtext={item.navtext}
                />
              )}
            </NavLink>
          ))}
          <button
            className={collapsed ? collapse : notCollapsed}
            onClick={() => toggle(!collapse)}
          >
            <img src={collapsed ? collapseinactive : collapseactive} alt="" />
            {!collapsed && <p>Collapse</p>}
          </button>
        </header>
        <div className="flex flex-col gap-5 justify-center ">
          <div
            className={`${
              collapsed
                ? " justify-center w-15"
                : "w-full pl-5 transition-all duration-300  justify-start"
            } flex items-center gap-4 h-15`}
          >
            <button className="h-6 w-6 cursor-pointer bg-[#E5E5E5] text-primary-grey flex items-center justify-center font-black rounded text-[11px]">
              B
            </button>
            {!collapsed && (
              <p className="text-primary-grey font-medium text-sm">Account</p>
            )}
          </div>
          <div
            className={`${
              collapsed
                ? " justify-center w-15"
                : "w-full pl-6 transition-all duration-300  justify-start"
            } flex items-center gap-4 h-15`}
          >
            <button className="cursor-pointer">
              <img src={signout} alt="" />
            </button>
            {!collapsed && (
              <p className="text-red-500 font-medium text-sm">Logout</p>
            )}
          </div>
        </div>
      </div>
    </div>
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
    to: "/dashboard/activity",
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
    to: "/dashboard/finance",
  },
  {
    id: 6,
    imageActive: emergencyactive,
    imageInactive: emergencyinactive,
    navtext: "Emergency",
    to: "/dashboard/emergency",
  },
];
