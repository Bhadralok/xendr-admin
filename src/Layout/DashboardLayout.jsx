import NavButtons from "../UI/NavButtons";

import CustomInput from "../UI/CustomInput";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import SideNav from "../Components/SideNav";
import TopHeader from "../Components/TopHeader";

export default function DashboardLayout() {
  return (
    <>
      <div className=" flex h-screen ">
        <SideNav />
        <div className="flex flex-col w-full justify-between">
          <div>
            <TopHeader />
            <div className="mx-4">
              <Outlet />
            </div>
          </div>
          <div className="mx-4">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

// Data for each navigation
