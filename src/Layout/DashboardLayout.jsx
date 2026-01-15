import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function DashboardLayout() {
  return (
    <>
      <div className="h-screen">
        <Header />
      </div>

      <Outlet />
    </>
  );
}
