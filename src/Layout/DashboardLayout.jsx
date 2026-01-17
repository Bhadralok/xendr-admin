import NavButtons from "../UI/NavButtons";

import CustomInput from "../UI/CustomInput";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import SideNav from "../Components/SideNav";
import TopHeader from "../Components/TopHeader";
import { useContext } from "react";
import { CollapseContext } from "../Context/CollapsedContext";

export default function DashboardLayout() {
  const { collapsed } = useContext(CollapseContext);
  return (
    <>
      <div className="flex h-screen ">
        <SideNav />
        <div
          className={`${
            collapsed ? "w-full" : "w-[88.5vw]"
          } flex ml-25  flex-col justify-between`}
        >
          <div>
            <TopHeader />
            <div className="mx-4 mt-4">
              <Outlet />
            </div>
          </div>
          <div className="mx-4 mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

// Data for each navigation
